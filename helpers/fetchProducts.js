const fetchProducts = async (productName) => {
  // const api = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;

  try {
  if (productName === undefined) throw new Error('You must provide an url');
  const response = await fetch(url);
  const data = await response.json();
  return data;
} catch (error) {
  return 'You must provide an url';
}
};

fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
