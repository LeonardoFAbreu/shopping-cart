// const subTotal = document.querySelector('.total-price');
const clearCartButton = document.querySelector('.empty-cart');
// const cartClass = document.querySelector('.cart__items');
const [loadingElement] = document.getElementsByClassName('loading');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

  const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// const updateSubtotal = async () => {
//   const price = [...document.getElementsByClassName('cart__item')]
//     .map((element) => element.innerText)
//     .map((content) => content.match(/\$(\d+\.?\d+)/m)[1])
//     .map((stringNumber) => Number(stringNumber))
//     .reduce((total, current) => total + current, 0);

//   // subtotalElement.innerText = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//   subTotal.innerText = price;
// };

const cartItemClickListener = (event) => {
  event.target.remove();
  // updateSubtotal();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  // updateSubtotal();
  return li;
 };

const addItemCart = async (product) => {
  const data = await fetchItem(product);
  // console.log(data);
    const sku = data.id;
    const name = data.title;
    const salePrice = data.price;
    const item = document.querySelector('.cart__items');
    // getLoadingMsg();
  // console.log(item);

  item.appendChild(createCartItemElement({ sku, name, salePrice }));
};

function addEventButton(event) {
// console.log(event.target.parentElement.firstChild);
const id = event.target.parentElement.firstChild.innerText;
// console.log(id);
addItemCart(id);
}

const getOneElement = async () => {
    // primeiro: chamar a função fetchProducts com parâmetro
    const data = await fetchProducts('computador');
    // segundo: percorrer o array 
    // terceiro: a cada iteração, chamar createProductItemElement
    data.results.forEach((element) => {
      const sku = element.id;
      const name = element.title;
      const image = element.thumbnail;
      const items = document.querySelector('.items');
      const currentElement = createProductItemElement({ sku, name, image });
      const button = currentElement.lastChild;
      // const clearButton = document.querySelector('.empty-cart');
      button.addEventListener('click', addEventButton);

      items.appendChild(currentElement);
    });
};

getOneElement();

// const saveProductCartItems = async (event) => {

// };

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const clearCartItems = () => {
  const ol = document.querySelector('.cart__items');
  ol.innerHTML = '';
};

const sendProducts = async () => {
  const { results: products } = await fetchProducts('computador');
  loadingElement.remove();

  products.forEach(({ id: sku, title: name, thumbnail: image }) => {
    productListElement.appendChild(createProductItemElement({ sku, name, image }));
  });
  Array.from(document.getElementsByClassName('item__add')).forEach((element) => {
    element.addEventListener('click', addItemCart);
  });
};

window.onload = async () => {
clearCartButton.addEventListener('click', clearCartItems);
sendProducts();
};
