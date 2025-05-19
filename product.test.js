const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct, products } = require('./productos/product')


describe ('add products', () => {
    beforeEach(() => {
      products.length = 0; 
    });
it('add products ok', () => {
 const result = addProduct('Cafetera', 120);
 expect(result).toEqual({name: 'Cafetera', price: 120 });
});
it('throw error if name is missing', () => {
    expect(() => addProduct(undefined, 120)).toThrow('The name parameter is missing');
});
it('throw error if price is missing', () => {
    expect(() => addProduct('Cafetera', undefined)).toThrow('The price parameter is missing');
});
it('throw an error if the product already exists', () => {
    addProduct('Tv', 300)
    expect(() => addProduct('Tv', 300)).toThrow('The product already exists');
});

})