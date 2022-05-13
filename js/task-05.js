let nameInputEl = document.querySelector("#name-input");
let nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
    if (nameInputEl !== "")
        {nameOutputEl.textContent = event.currentTarget.value;} 
    else {nameOutputEl.textContent = "Anonymous"}
}
);
