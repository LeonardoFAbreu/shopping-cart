const saveCartItems = async (productName) => {
  // const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;
  
if (productName === undefined) throw new Error('You must provide an url');
    
  localStorage.setItem('cartItems', productName);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
