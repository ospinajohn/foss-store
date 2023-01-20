import { Router } from 'express';
import {
  deleteProduct,
	getProductById,
	getProducts,
	newProduct,
	updateProduct,
} from '../controllers/productsController.js';

const router = Router();

router.get('/products', getProducts); // Obtener todos los productos
router.post('/product/new', newProduct); // Crear producto
router.get('/product/:id', getProductById); // Obtener un producto por ID
router.put('/product/:id', updateProduct); // Actualizar un producto por ID
router.delete('/product/:id', deleteProduct); // Eliminar un producto por ID

export default router;
