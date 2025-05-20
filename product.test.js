const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct, products } = require('./productos/product')


describe ('add products', () => {
    beforeEach(() => {
    resetProducts();
    });

    it('add products ok', () => {
 const result = addProduct('Cafetera', 120);
 expect(result).toEqual({id: 0, name: 'Cafetera', price: 120 });
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

});

describe('remove product', () => {
     beforeEach(() => {
    resetProducts(); 
     });
  it('throw and error if the id not found', () => {
    expect(() => removeProduct('id-inexistente')).toThrow('Product not found'); 
})
})


describe('get product', () => {
     beforeEach(() => {
    resetProducts(); 
     });
    it('throw and error if the product not exist', () => {
        expect(() => getProduct(99)).toThrow('Product not found');
    })
})


describe('update product ok', () => {
    beforeEach(() => {
    resetProducts(); 
    addProduct('Cafetera', 120)
     })
    
    it('updates name and price correctly',() => {
     const updated = updateProduct(0, 'Microondas', 200);
     expect(updated).toEqual({id: 0, name: 'Microondas', price: 200 });
    });

    it('updates only name if price is undefined', () => {
     const updated = updateProduct(0, 'Nintendo', undefined);
     expect(updated).toEqual({id: 0, name: 'Nintendo', price: 120 });
    })
   
    it('updates only price if name is undefined', () => {
     const updated = updateProduct(0, undefined, 150);
     expect(updated).toEqual({id: 0, name: 'Cafetera', price: 150 });
    })
   
    it('Throw an error if product does not exists', () => {
     expect(() => updateProduct(99, 'Plancha', 100)).toThrow('Product not found');
    });
});