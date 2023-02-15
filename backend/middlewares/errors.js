import ErrorHandler from '../utils/errorHandler.js';

export default (err, req, res, next) => {
	err.statusCode = err.statusCode || 500; // 500 es el codigo de error interno del servidor
	err.message = err.message || 'Error interno en el servidor'; // mensaje de error interno del servidor

	res.status(err.statusCode).json({
		success: false,
		errMessage: err.message,
	});

	if (err.name === 'CastError') {
		const message = `Recurso no encontrado. Id inválido: ${err.value}`;
		err = new ErrorHandler(message, 400);
	}

	if (err.name === 'ValidationError') {
		const message = Object.values(err.errors).map(value => value.message);
		err = new ErrorHandler(message, 400);
	}

	if (err.code === 11000) {
		const message = `El valor ${Object.values(err.keyValue)} ya existe`;
		err = new ErrorHandler(message, 400);
	}

	if (err.name === 'JsonWebTokenError') {
		const message =
			'Token inválido. Acceso denegado, por favor inicie sesión de nuevo';
		err = new ErrorHandler(message, 400);
	}

	if (err.name === 'TokenExpiredError') {
		const message = 'Token expirado. Por favor inicie sesión de nuevo';
		err = new ErrorHandler(message, 400);
	}

	res.status(err.statusCode).json({
		success: false,
		errMessage: err.message || 'Error interno en el servidor',
	});

	if (process.env.NODE_ENV === 'DEVELOPMENT') {
		res.status(err.statusCode).json({
			success: false,
			errMessage: err.message,
			stack: err.stack,
			err,
		});
	}
};
