// El modelo es el encargado de la lógica de negocio de la aplicación y de la comunicación con la base de datos, que en este caso es MongoDB. Que se se quiere decir con logica de negocio, esto se refiere a que el modelo es el encargado de realizar las validaciones de los datos, de realizar las consultas a la base de datos, de realizar las inserciones, actualizaciones y eliminaciones de los datos, etc.
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({ // Se crea el esquema del modelo de producto con el método Schema de mongoose y se le pasa un objeto con las propiedades que va a tener el modelo 
	nombre: {
		type: String,
		required: [true, 'Por favor ingrese el nombre del producto'],
		trim: true, // Elimina los espacios en blanco al inicio y al final
		maxLength: [
			100,
			'El nombre del producto no puede tener más de 100 caracteres',
		],
	},
	precio: {
		type: Number,
		required: [true, 'Por favor ingrese el precio del producto'],
		maxLength: [5, 'El precio del producto no puede tener más de 5 caracteres'],
		default: 0.0,
	},
	descripcion: {
		type: String,
		required: [true, 'Por favor ingrese la descripción del producto'],
	},
	imagenes: [
		{
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	],
	categoria: {
		type: String,
		required: [true, 'Por favor ingrese la categoría del producto'],
		enum: {
			values: ['Camisetas', 'Pantalones', 'Camisas', 'Sudaderas', 'Jeans'],
		},
	},
	stock: {
		type: Number,
		required: [true, 'Por favor ingrese la cantidad en stock'],
		maxLength: [5, 'El stock del producto no puede tener más de 5 caracteres'],
		default: 0,
	},
	user: { 
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Product', productSchema); 
