const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 


const liEl = document.querySelector('#ingredients');
console.log(liEl);

const elements = ingredients.map(option => {
  const addEl = document.createElement('li');
  addEl.textContent = option;
  addEl.classList.add = 'item';

  return addEl;
}
  );

  liEl.append(...elements);
