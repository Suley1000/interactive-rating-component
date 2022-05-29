const ratings = [...document.querySelectorAll(".rating")];
const submit = document.querySelector("[type='submit']");
const ratingContainer = document.querySelector(".container");
const thankyouContainer = document.querySelector(".thank-you-box");
let selected = 0;

ratings.map((rating) => {
  rating.addEventListener("click", () => {
    if (selected !== 0 && selected !== parseInt(rating.innerHTML)) {
      ratings[selected - 1].classList.toggle("selected");
    }

    rating.classList.toggle("selected");

    if (selected === parseInt(rating.innerHTML)) {
      selected = 0;
    } else {
      selected = parseInt(rating.innerHTML);
    }
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (selected === 0) {
    return;
  } else {
    const result = document.querySelector(".result");
    result.innerHTML = `you selected ${selected} out of 5`;
    ratingContainer.style.display = "none";
    thankyouContainer.style.display = "block";
  }
});
