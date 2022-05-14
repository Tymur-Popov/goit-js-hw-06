function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

function onButtonClick () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
};

changeColorBtn.addEventListener("click", onButtonClick);

