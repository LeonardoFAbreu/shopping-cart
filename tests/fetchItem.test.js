require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('test if fetchItem is a function', () => {
    expect(typeof (fetchItem)).toEqual('function');
  })

  it('tests if when the function receives the argument "MLB1615760527" the fetch is called', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it('tests if when the function is called with the argument "MLB1615760527", fetch uses the correct endpoint', () => {
    fetchItem("MLB1615760527");
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toBeCalledWith(url);
  })

  it('tests if the fetchItem function return with the argument "MLB1615760527" is a data structure equal to the item object, which is already imported in the file', async () => {
    const argumentItem = await fetchItem('MLB1615760527');
    expect(argumentItem).toEqual(item);
  })

  it('tests if, when calling the fetchItem function without an argument, it returns an error with the message: You must provide an url', async () => {
    const actual = await fetchItem();
    const error = 'You must provide an url';
    expect(actual).toEqual(error);
   });
 })
  // fail('Teste vazio');