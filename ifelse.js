function verificarLogin() {
let txtLogin = document.getElementById("txtLogin");
let txtSenha = document.getElementById("txtSenha");

const login = "teste";
login = "teste2";
let senha = "teste";

if (txtLogin.value == login && txtSenha.value == senha) {
    console.log("Logado com sucesso!");
} else {
    console.log("Login ou senha icorretos!Tente novamente");
}
