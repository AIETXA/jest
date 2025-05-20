let products = [] ;
let currentId = 0;

function resetProducts() {
  products.length = 0;
  currentId = 0;
}

function getProduct(id) {
    const product = products.find(p => p.id === id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}

function addProduct(name, price) {
    if(name === undefined) {
        throw new Error('The name parameter is missing')
    }
    if(price === undefined) {
      throw new Error('The price parameter is missing')
    }

    const existe = products.some(p => p.name === name);
    if (existe) {
        throw new Error('The product already exists');
}


let newProduct = { 
  id: currentId++,
   name, 
   price };

products.push(newProduct);
return newProduct;
}



function removeProduct(id) {
  const indice = products.findIndex(p => p.id === id);
    if(indice === -1) {
      throw new Error('Product not found');
    }
    products.splice(indice, 1);
}

function updateProduct(id, name, price) {
  const product = products.find(p => p.id === id);
  if (!product) {
    throw new Error('Product not found');
  }

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;

  return product;
}


module.exports = { products, 
    getProduct,
    addProduct,
    resetProducts,
    removeProduct, 
    updateProduct,
}