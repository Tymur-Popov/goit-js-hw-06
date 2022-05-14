let counterValue = 0;

const incrBtn = document.querySelector("#counter").lastElementChild;
const decrBtn = document.querySelector("#counter").firstElementChild;

const counterEl = document.querySelector("#value");

incrBtn.addEventListener("click", (event) => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

decrBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
