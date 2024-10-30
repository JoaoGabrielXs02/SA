function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username && password) {
        document.getElementById("login").style.display = "none";
        document.getElementById("musicPlayer").style.display = "block";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}