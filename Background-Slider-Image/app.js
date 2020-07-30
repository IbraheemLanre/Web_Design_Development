/* A program created as an image slider */
// Array of images
const picture = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

//Select both the left and right button and add event listeners
const buttons = document.querySelectorAll(".btn");
const imgDIV = document.querySelector(".img-container");

let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn-left")) {
      counter--;
      if (counter < 0) {
        counter = picture.length - 1;
      }
      imgDIV.style.backgroundImage = `url('./img/${picture[counter]}.jpeg')`;
    }
    if (button.classList.contains("btn-right")) {
      counter++;
      if (counter > picture.length - 1) {
        counter = 0;
      }
      imgDIV.style.backgroundImage = `url('./img/${picture[counter]}.jpeg')`;
    }
  });
});
