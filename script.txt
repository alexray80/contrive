"use strict";

const dropDowns = document.querySelectorAll(".dropdown");
console.log(dropDowns);

for (let item of dropDowns) {
  item.addEventListener("click", dropDownHandler);
  item.querySelector(".dropdown__item").classList.add("dropdown__hidden");
}

function dropDownHandler(event) {
  const currentOption = event.target.closest("li");

  if (currentOption) {
    console.log(currentOption);

    const currnetElement = event.target
      .closest(".dropdown")
      .querySelector(".dropdown__current");
    currnetElement.innerHTML = currentOption.innerHTML;
    const options = event.target
      .closest("ul")
      .querySelectorAll(".dropdown__item");
    for (let item of options) {
      item.classList.remove("dropdown__hidden");
    }
    currentOption.classList.add("dropdown__hidden");
  }
}

// mobile menu
const mobileBtn = document.querySelector(".nav__button--mobile");
console.log(mobileBtn);
const body = document.body;
const mobileIcon = mobileBtn.querySelector("i");
mobileBtn.onclick = function (event) {
  body.classList.toggle("mobile");
  mobileIcon.classList.toggle("fa-bars");
  mobileIcon.classList.toggle("fa-xmark");
};

// slider 1
const options1 = {
  arrows: true,
  pagination: true,
};
const splide1 = new Splide("#splide1", options1).mount();
