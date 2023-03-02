const adviceDisplay = document.querySelector(".adviceText");
const idDisplay = document.getElementById("ID");
const getAdvice = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceDisplay.textContent = data.slip.advice;
      console.log(data.slip.id);
      idDisplay.textContent = data.slip.id;
    })
    .catch((err) => console.log(err));
};
document.querySelector(".nextAdvice").addEventListener("click", getAdvice);
