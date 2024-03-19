const imgOne = document.querySelector(".img1 img");
const imgTwo = document.querySelector(".img2 img");
let currentPage = 6;
const formateImageName = (number) => {
  let formattedNumber = number;
  if (number < 10) {
    formattedNumber = `00${number}`;
  } else if (number < 100) {
    formattedNumber = `0${number}`;
  }

  return `download-${formattedNumber}.webp`;
};
imgOne.src = `./assets/images/${formateImageName(currentPage)}`;
imgTwo.src = `./assets/images/${formateImageName(currentPage + 1)}`;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
next.addEventListener("click", () => {
  currentPage += 2;
  imgOne.src = `./assets/images/${formateImageName(currentPage)}`;
  imgTwo.src = `./assets/images/${formateImageName(currentPage + 1)}`;
});
prev.addEventListener("click", () => {
  if (currentPage === 0) return;
  currentPage -= 2;
  imgOne.src = `./assets/images/${formateImageName(currentPage)}`;
  imgTwo.src = `./assets/images/${formateImageName(currentPage + 1)}`;
});
