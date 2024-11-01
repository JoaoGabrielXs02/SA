
function cadastrarUsuario() {
    const nome = document.querySelector("input[placeholder='Nome']").value;
    const telefone = document.querySelector("input[placeholder='Telefone']").value;
    const email = document.querySelector("input[placeholder='E-mail']").value;
    const senha = document.querySelector("input[placeholder='Senha']").value;
  
    if (nome && telefone && email && senha) {
      
      const usuario = { nome, telefone, email, senha };
      localStorage.setItem(email, JSON.stringify(usuario));
      alert("Cadastro realizado com sucesso!");
      
      window.location.href = 'teladelogin.html';
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  }

  function fazerLogin() {
    const email = document.querySelector("input[placeholder='E-mail']").value;
    const senha = document.querySelector("input[placeholder='Senha']").value;
  
    const usuario = JSON.parse(localStorage.getItem(email));
  
    if (usuario && usuario.senha === senha) {
      alert("Login realizado com sucesso!");
      
      window.location.href = 'inicio.html';
    } else {
      alert("E-mail ou senha incorretos!");
    }
  }

  function redefinirSenha() {
    const email = document.querySelector("input[placeholder='E-mail']").value;

    const usuario = JSON.parse(localStorage.getItem(email));

    if ( usuario && usuario.email === email) {
       
        window.location.href = 'redefinirsenha.html';
    } else {
        alert("Email não correspondente");
    }
  }
  
  
    const cadastrar = document.querySelector(".cadastro-card button");
    const login = document.querySelector(".login-card button");
    const validar = document.querySelector(".validar-card button");
  
    if (cadastrar) {
      cadastrar.addEventListener("click", (event) => {
        event.preventDefault(); 
        cadastrarUsuario();
      });
    }
  
    if (login) {
      login.addEventListener("click", (event) => {
        event.preventDefault(); 
        fazerLogin();
      });
    }

    if (validar) {
        validar.addEventListener("click", (event) => {
            event.preventDefault();
            redefinirSenha();
        })
    }
  
  