function mostrarSenha(){
    var tipo = document.getElementById("password");
    if(tipo.type =="password"){
        tipo.type="text";
    }else{
        tipo.type="password";
    }
}

function envioCadastro(){
    
    alert("Cadastro enviado com sucesso");
}
