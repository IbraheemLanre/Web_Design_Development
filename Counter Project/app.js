/* A program written for counting down */

const buttons = document.querySelectorAll(".click-btn");
const counter = document.querySelector("#counter");

let count = 0;

// Add evebtlistener and functionality to each button
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("prevBtn")) {
      count--;
    } else if (btn.classList.contains("nextBtn")) {
      count++;
    }

    // Select the counter text to increase or decrease counting

    counter.textContent = count;

    if (count < 0) {
      counter.style.color = "red";
    } else if (count > 0) {
      counter.style.color = "green";
    } else {
      counter.style = "#333333";
    }
  });
});
