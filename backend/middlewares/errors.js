import ErrorHandler from '../utils/errorHandler.js';

// este archivo es donde se manejan los errores de la aplicacion y se envian los mensajes de error al cliente de forma amigable y no mostrar el error completo al cliente

export default (err, req, res, next) => {
	err.statusCode = err.statusCode || 500; // 500 es el codigo de error interno del servidor
	err.message = err.message || 'Error interno en el servidor'; // mensaje de error interno del servidor

  // si estamos en desarrollo mostramos el error completo PERO si estamos en produccion solo mostramos el mensaje de error
	if (process.env.NODE_ENV === 'DEVELOPMENT') {
		res.status(err.statusCode).json({
			success: false, // esto es para saber si hubo un error o no
			error: err, // esto es el error completo
			errMessage: err.message, // esto es el mensaje de error que nosotros le pasamos
			stack: err.stack, // esto nos muestra en que linea del codigo se esta ejecutando el error
		});
	}

  // si estamos en producion solo mostramos el mensaje de error
	if (process.env.NODE_ENV === 'PRODUCTION') {
		let error = { ...err };

		error.message = err.message;

		// error de mongoose cuando se busca un id que no existe
		if (err.name === 'CastError') {
			const message = `Recurso invalido o no econtrado: ${err.path}`;
			error = new ErrorHandler(message, 400);
		}

		// Error de mongoose cuando se envian datos invalidos
		if (err.name === 'ValidationError') {
			const message = Object.values(err.errors).map(value => value.message);
			error = new ErrorHandler(message, 400);
		}

		// error de mongoose cuando se envia un dato duplicado
		if (err.code === 11000) {
			const message = `Clvade duplicada ${Object.keys(err.keyValue)}`;
			error = new ErrorHandler(message, 400);
		}

		// Error cuando el JSON WEB token no es valido
		if (err.name === 'JsonWebTokenError') {
			const message = 'el JSON WEB token no es válido. ¡¡Inténtelo de nuevo!!';
			error = new ErrorHandler(message, 400);
		}

		// error cuando el JSON WEB token ha caducado
		if (err.name === 'TokenExpiredError') {
			const message = 'El JSON Web Token ha caducado. ¡¡Inténtelo de nuevo!!';
			error = new ErrorHandler(message, 400);
		}

    // si no es ninguno de los errores anteriores mostramos el error interno del servidor
		res.status(error.statusCode).json({
			success: false,
			message: error.message || 'Internal Server Error',
		});
	}
};
