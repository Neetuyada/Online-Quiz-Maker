I built an Online Quiz Maker using HTML, CSS, and JavaScript where users can log in, create quizzes, attempt them, and view a leaderboard. All data like users, quizzes, and scores are stored in the browser using localStorage, making it lightweight without needing a server.
The implementation steps are:-
Login System-Users enter a username on the login page. This name is saved in localStorage to track their quiz participation.
Quiz Creation: Users can create their own quiz by entering a question, four options, and selecting the correct answer. These questions are saved to localStorage.
Playing the Quiz:Questions are dynamically loaded one by one. When an answer is clicked, the system immediately highlights the correct and wrong answers, and tracks the user's score.
Leaderboard:After finishing a quiz, the user's name and score are saved. The leaderboard page fetches all scores from localStorage and displays them in descending order.
Logout Functionality:A logout button clears the current user's session and redirects back to the login page.
Styling and Enhancements:A navy blue theme, attractive buttons, smooth hover effects, spacing improvements, and basic animations were added to make the app visually engaging.
