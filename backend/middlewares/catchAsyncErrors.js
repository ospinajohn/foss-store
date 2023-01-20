const catchAsyncErrors = fn => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

// este es el middleware que se va a usar en los controladores para manejar los errores de forma asincrona y no tener que usar try catch en cada controlador y asi evitar el anidamiento de try catch.

//Esto funciona de la siguiente manera, se crea un middleware que recibe una funcion y retorna una funcion que recibe req, res y next, esta funcion interna ejecuta la funcion que recibe como parametro y si hay un error lo pasa al siguiente middleware, en este caso el error handler.

// en el controlador se importa el middleware y se usa de la siguiente manera: 
// export const getProducts = catchAsyncErrors(async (req, res) => {
// 	const products = await productModel.find();
// 	res.status(200).json({
// 		success: true,
// 		count: products.length,
// 		data: products,
// 	});



export default catchAsyncErrors;