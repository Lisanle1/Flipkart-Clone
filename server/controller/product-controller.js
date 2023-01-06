import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {
        console.log(error)
    }
}
export const addProducts = async (request, response) => {
    const payload=request.body;
    try {
        const productData=new Product(payload)
        productData.save()
        response.json(productData);
    }catch (error) {
        console.log(error)
    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
    }catch (error) {
        console.log(error)
    }
}