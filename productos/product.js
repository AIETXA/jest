let products = [] ;
let id = 0;


function resetProducts() {
  products = [];
  id = 0;
}

function getProducts() {
  return products;
}

function addProduct(name, price) {
    if(name === undefined || price === undefined) {
        throw new Error('Missing mandatory parameters')
    }

    if (existe) {
        throw new Error('The product already exists');
}

id++;
let newProduct = { id, name, price };
products.push(newProduct);





function removeProduct(id) {
    if(id === undefined)

}

module.exports = { products, id, 
    getProducts,
    addProduct,
    resetProducts,
    removeProduct, 

}