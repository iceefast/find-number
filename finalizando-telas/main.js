let randomNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector("#btnTry");
const bntReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2 h2");

let xAttempts = 1;

function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  If(isValue());
  {
    alert("Please type a correct number");
  }

  If(Number(inputNumber.value) == randomNumber);
  {
    toogleScreen();

    screen2.innerText = `acertou em ${xAttempts} tentativas`;
  }

  xAttempts++;
}

function handleResetClick(event) {
  toogleScreen();
  xAttempts = 1;
}

function toogleScreen(event) {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  randomNumber = Math.round(Math.random() * 10);
}

btnTry.addEventListener("click", handleTryClick);
bntReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

function isValue() {
  isValue = true;
  if (inputNumber.value < 0 || inputNumber.value > 10) {
    isValue = false;
  }
}
