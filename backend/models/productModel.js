import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
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
		maxLength: [8, 'El precio del producto no puede tener más de 5 caracteres'],
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
	genero: {
		type: String,
		required: [true, 'Por favor ingrese el género del producto'],
		enum: {
			values: ['Hombre', 'Mujer', 'Niño', 'Niña'],
		},
	},
	categoria: {
		type: String,
		required: [true, 'Por favor ingrese la categoría del producto'],
		enum: {
			values: ['Camisetas', 'Pantalones', 'Camisas', 'Sudaderas', 'Jeans'],
		},
	},
	stock: {
		// se puede crear un array de tallas y stock para poder registrarlo por talllas y no por producto
		type: Number,
		required: [true, 'Por favor ingrese la cantidad en stock'],
		maxLength: [5, 'El stock del producto no puede tener más de 5 caracteres'],
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Products', productSchema);
