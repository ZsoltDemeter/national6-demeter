const BREEDLIST_URL = "https://dog.ceo/api/breeds/list/all";

export function getBreedList(callback) {
  fetch(BREEDLIST_URL)
    .then((r) => r.json())
    .then((response) => {
      callback(response.message);
    });
}

// export async function getBreedImage(breed, number, array, ref) {
//   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
//   const data = await response.json();
//   array = data.message;

//   ref.src = imageArray[number];
// }
