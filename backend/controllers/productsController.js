import catchAsyncErrors from '../middlewares/catchAsyncErrors.js';
import productModel from '../models/productModel.js';

// Obtener todos los productos
export const getProducts = catchAsyncErrors(async (req, res) => {
	const products = await productModel.find();
	res.status(200).json({
		success: true,
		count: products.length,
		data: products,
	});
});

// Crear producto
export const newProduct = catchAsyncErrors(async (req, res) => {
	const product = await productModel.create(req.body);
	res.status(201).json({
		success: true,
		data: product,
	});
});

// Obtener un producto por ID
export const getProductById = catchAsyncErrors(async (req, res) => {
	const product = await productModel.findById(req.params.id);
	if (!product) {
		return next(new ErrorHandler('Producto no encontrado', 404));
	}
	res.status(200).json({
		success: true,
		data: product,
	});
});

// Actualizar un producto por ID
export const updateProduct = catchAsyncErrors(async (req, res, next) => {
	let product = await productModel.findById(req.params.id);
	if (!product) {
		return next(new ErrorHandler('Producto no encontrado', 404));
	}
	product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({
		success: true,
		data: product,
	});
});

// Eliminar un producto por ID
export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
	const product = await productModel.findById(req.params.id);
	if (!product) {
		// Si no encuentra el producto por el ID que se le pasa en la URL
		return next(new ErrorHandler('Producto no encontrado', 404));
	}
	await product.remove(); // Elimina el producto
	res.status(200).json({
		success: true,
		message: 'Producto eliminado',
		product: {
			_id: product._id,
			name: product.nombre,
		},
	});
});
