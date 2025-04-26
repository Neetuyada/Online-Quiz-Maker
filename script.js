const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let questions = JSON.parse(localStorage.getItem("quiz")) || [];

function startQuiz() {
  document.getElementById("welcomeMessage").innerText = `Welcome ${localStorage.getItem('currentUser')}!`;
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) button.dataset.correct = "true";
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selected = e.target;
  const correct = selected.dataset.correct === "true";
  if (correct) score++;
  Array.from(answerButtons.children).forEach((btn) => {
    if (btn.dataset.correct === "true") btn.classList.add("correct");
    else btn.classList.add("incorrect");
    btn.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name: localStorage.getItem('currentUser'), score: score });
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) showQuestion();
  else showScore();
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) handleNext();
  else startQuiz();
});

startQuiz();

window.onload = function() {
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});
};
