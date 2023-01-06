import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user: {
        username: String,
    },
    cartItems: [
        {
            product: {
                id: String,

            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                price: Number,
                
            }
        }
    ]
});

let Cart = mongoose.model('Cart', cartSchema);

export default Cart;