const list = document.getElementById("leaderboardList");
let scores = JSON.parse(localStorage.getItem("leaderboard")) || [];

scores.sort((a, b) => b.score - a.score);

scores.forEach(entry => {
    const li = document.createElement("li");
    li.innerText = `${entry.name} - ${entry.score}`;
    list.appendChild(li);
});
