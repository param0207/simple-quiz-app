const form = document.querySelector(".quiz-form");
const questionItem = document.querySelectorAll(".question-item");

const cong = document.querySelector(".cong");

form.addEventListener("submit", (e) => {
  let wrongAnswers = questionItem.length;
  e.preventDefault();
  questionItem.forEach((question) => {
    console.dir(question);

    const answer = question.dataset.answer;
    const options = question.querySelectorAll(".answer");

    options.forEach((option) => {
      if (option.checked) {
        if (option.value === answer) {
          question.classList.remove("red");
          question.classList.add("green");
          wrongAnswers -= 1;
        } else {
          question.classList.remove("green");
          question.classList.add("red");
        }
      }
    });
  });

  if (wrongAnswers === 0) {
    cong.classList.add("show");
    setTimeout(() => {
      cong.classList.remove("show");
    }, 500);
  }
});
