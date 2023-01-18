import productModel from "../models/productModel.js";

export const getProducts = async (req, res) => {
	res.status(200).json({
		message: 'Obteniendo los productos',
	});
};

// Crear producto
export const newProduct = async (res, req) => {
	// req.body.user = req.user.id;
	const product = await productModel.create(req.body);
	res.status(201).json({
		success: true,
		data: product,
	});
}
