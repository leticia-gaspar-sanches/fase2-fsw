document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var nome = document.getElementById("formGroupInput").value;
    var email = document.getElementById("formGroupInput2").value;
    var senha = document.getElementById("formGroupInput3").value;
  
    
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Senha:", senha);
  });
  
  document.getElementById('cadastrarBtn').addEventListener('click', cadastrar);
 