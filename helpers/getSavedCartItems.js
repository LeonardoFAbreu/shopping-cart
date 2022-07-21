// const saveCartItems = require('./saveCartItems');

const getSavedCartItems = () => localStorage.getItem('cartItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
