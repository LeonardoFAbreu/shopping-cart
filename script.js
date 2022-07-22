const clearCartButton = document.querySelector('.empty-cart');

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

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemCart = async (product) => {
  const data = await fetchItem(product);
  // console.log(data);
    const sku = data.id;
    const name = data.title;
    const salePrice = data.price;
    const item = document.querySelector('.cart__items');
  // console.log(item);

  item.appendChild(createCartItemElement({ sku, name, salePrice }));
  
  // createCartItemElement({ sku, name, salePrice });
  
  // });
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

window.onload = () => { };
clearCartButton.addEventListener('click', clearCartItems);
