import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: {
        type:String,
    },
    url: {
        type:String,
    },
    detailUrl: {
        type:String,
    },
    title: {
        type:Object,
    },
    price: {
        type:Object,
    },
    quantity: {
        type:Number,
    },
    description:{
        type:String,
    },
    discount: {
        type:String,
    },
    tagline: {
        type:String,
    },
});


const products = mongoose.model('product', productSchema);

export default products;