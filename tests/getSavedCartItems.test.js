const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('tests if, when executing getSavedCartItems, the method localStorage.setItem is called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledTimes(1);
  })

  it('tests if, when executing getSavedCartItems, the localStorage.getItem method is called with cartItems as a parameter', () => {
    const data = 'cartItems';
    getSavedCartItems(data);
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })

});
