import express from  'express';
import { getProductById, getProducts,addProducts } from '../controller/product-controller.js';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { addItemInCart } from '../controller/cart-controller.js';


const router = express.Router();
 
//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.post('/products', addProducts);
router.get('/product/:id', getProductById);

router.post('/cart/add', addItemInCart);


export default router;