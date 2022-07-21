const fetchItem = async (product) => {
  // const api = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
  const url = `https://api.mercadolibre.com/items/${product}`;

  try {
  if (product === undefined) throw new Error('You must provide an url');
  const response = await fetch(url);
  const data = await response.json();
  return data;
} catch (error) {
  return 'You must provide an url';
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
