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

// tabs

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
