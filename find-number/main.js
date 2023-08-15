const randomNumber = Math.round(Math.random() * 10).toFixed(2);
let tentativas = 1;
function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.getElementById("inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen-one").classList.add(".hide");
    document.querySelector(".screen-two").classList.remove(".hide");
    document.querySelector("screen-two h2").innerHTML =
      "Parabéns, você acertou com" + tentativas + "tentativas.";

    console.log("voce acertou em" + tentativas + "tentativas");
  }
  tentativas++;
}
