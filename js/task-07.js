const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
const textEl = document.querySelector("#text");
console.log(textEl.textContent);

inputEl.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
