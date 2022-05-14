const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulEl = document.querySelector(".gallery");
console.log(ulEl);

const addImgEl = images.map((el) => {
  const addLi = document.createElement("li");
  addLi.insertAdjacentHTML(
    "afterbegin",
    `<img src="${el.url}" alt="${el.alt}" width = "300" height = 
  "200">`
  );
  ulEl.append(addLi);
});
ulEl.style.cssText = `display: flex;
justify-content: space-around;
list-style-type: none;`;
