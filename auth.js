function login(){
    const username = document.getElementById('username').value.trim();
    if(username){
        localStorage.setItem('currentUser', username);
        alert("Login successful!");
        window.location.href = "quiz.html"; 
    }else{
        alert("Please enter a valid username");
    }
}
