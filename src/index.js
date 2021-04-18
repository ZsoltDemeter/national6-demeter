import { changePage, resetPage } from "./local_storage/changePageNumber";
import { setPage } from "./local_storage/onRefresh";
import { getBreedList } from "./utils/api";

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

const breedImageHtml = document.getElementById("breed-image");
const breedListHtml = document.getElementById("breeds");
const pageNumber = document.getElementById("page-number");
const forwardButton = document.getElementById("forward");
const backwardButton = document.getElementById("backward");

let imageArray = [];
let selectedBreed;
let number = 0;

if (localStorage.dogName && localStorage.pageNumber) {
  number = localStorage.pageNumber - 1;
  selectedBreed = localStorage.dogName;
  pageNumber.innerText = `${localStorage.pageNumber}`;
  getBreedImage(selectedBreed, number);
}

getBreedList(createList);

function createList(breedList) {
  for (const breed of Object.keys(breedList)) {
    renderBreed(breed);
  }
}

function renderBreed(breed) {
  const breedName = document.createElement("p");
  breedName.classList.add("allBreeds");
  if (breed === selectedBreed) {
    breedName.style.textDecoration = "underline";
  }
  breedListHtml.appendChild(breedName);

  breedName.innerHTML = breed;

  breedName.addEventListener("click", () => {
    const allBreeds = document.querySelectorAll(".allBreeds");
    for (const element of allBreeds) {
      element.style.textDecoration = "";
    }
    console.log(breed, "was clicked");
    number = 0;

    localStorage.dogName = breed;
    selectedBreed = breed;
    breedName.style.textDecoration = "underline";

    resetPage(pageNumber);
    getBreedImage(selectedBreed, number);
  });
}

forwardButton.addEventListener("click", () => {
  number++;
  changePage(number, pageNumber);
  getBreedImage(selectedBreed, number);
});

backwardButton.addEventListener("click", () => {
  if (number > 0) {
    number--;
    changePage(number, pageNumber);
    getBreedImage(selectedBreed, number);
  }
});

//I don't know why but the below function does not work when exported so I will leave it here

async function getBreedImage(breed, number) {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const data = await response.json();
  imageArray = data.message;

  breedImageHtml.src = imageArray[number];
}
