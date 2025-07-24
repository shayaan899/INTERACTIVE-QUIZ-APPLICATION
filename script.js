const quizData = [
{
    question: "What is the capital of India?",
    a: "Pune",
    b: "Kolkata",
    c: "Jaipur",
    d: "New Delhi",
    correct: "d",
  },
  {
    question: "Who won the 2015 Odi World Cup?",
    a: "England",
    b: "Australia",
    c: "India",
    d: "Sri Lanka",
    correct: "b",
  },
   {
    question: "How many colours are there in a rainbow",
    a: "Seven",
    b: "Eight",
    c: "Six",
    d: "Five",
    correct: "a",
  },
   {
    question: "What is the tallest land animal in the world",
    a: "Elephant",
    b: "Ostrich",
    c: "Giraff",
    d: "Blue whale",
    correct: "c",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Earth",
    d: "None of the above",
    correct: "b",
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionButtons.forEach(btn => {
    const id = btn.getAttribute("data-id");
    btn.textContent = currentQuiz[id];
    btn.disabled = false;
    btn.style.backgroundColor = "#eaeaea";
  });
}

function showScore() {
  questionEl.style.display = "none";
  document.querySelector("ul").style.display = "none";
  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `<h3>You scored ${score} out of ${quizData.length}</h3>`;
}

optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.getAttribute("data-id");
    const correct = quizData[currentQuestion].correct;

    optionButtons.forEach(btn => btn.disabled = true);
    if (selected === correct) {
      score++;
      button.style.backgroundColor = "#b4f5b4";
    } else {
      button.style.backgroundColor = "#f5b4b4";
    }

    // Automatically load next question after 1 second
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }, 1000);
  });
});

loadQuestion();
