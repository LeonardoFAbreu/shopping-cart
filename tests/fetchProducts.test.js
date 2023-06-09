require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se fetchProducts é uma função', () => {
    expect(typeof (fetchProducts)).toEqual('function');
  });

  it('testa se quando a função recebe o argumento computador a fetch é chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it('testa se quando a função é chamada com o argumento computador, a fetch utiliza o endpoint correto', () => {
    fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(url);
  })

  it('testa se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    const computer = await fetchProducts('computador');
    expect(computer).toEqual(computadorSearch);
  })

  it('testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
     const actual = await fetchProducts();
     const error = 'You must provide an url';
     expect(actual).toEqual(error);
    });
  })

  // fail('Teste vazio');
  // ''
