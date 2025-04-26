document.getElementById("quizForm").addEventListener("submit", function(e){
  e.preventDefault();
  const questionText = document.getElementById("question").value;
  const options = Array.from(document.getElementsByClassName("option")).map(input => input.value);
  const correctIndex = parseInt(document.getElementById("correct").value);

  let quiz = JSON.parse(localStorage.getItem("quiz")) || [];

  let answers = options.map((text, index) => ({
      text,
      correct: index === correctIndex
  }));

  quiz.push({
      question: questionText,
      answers: answers
  });

  localStorage.setItem("quiz", JSON.stringify(quiz));
  alert("Question added successfully!");
  this.reset();
});
