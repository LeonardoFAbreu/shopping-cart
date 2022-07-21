const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('tests if when the function receives the argument <ol><li>Item</li></ol>, the method localStorage.setItem is called', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledTimes(1);
  })

  it('tests if when the function receives the argument <ol><li>Item</li></ol>, the method localStorage.setItem is called with two parameters, the first being cartItems and the second being the value passed as an argument to saveCartItems', () => {
    const productName = '<ol><li>Item</li></ol>';
    saveCartItems(productName);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', productName);
  })

  it('tests if calling the saveCartItems function with no argument returns an error with the message: You must provide an url', async () => {
    const actual = await saveCartItems();
    const error = 'You must provide an url';
    expect(actual).toEqual(error);
   });

  // fail('Teste vazio');
});
