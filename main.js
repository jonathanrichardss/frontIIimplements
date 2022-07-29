import { Pessoa } from './pessoa.js';



const user = new Pessoa();

user.nome = document.getElementById('nome-input').value;
user.idade = document.getElementById('idade-input').value;
user.telefone = document.getElementById('telefone-input').value;
user.eAssinante = document.getElementById('eAssinante-input').value;

user.imprimirPessoa()
// user.criarPessoa();
// user.montarObjPessoa();
// user.imprimirPessoa();
// user.imprimirPessoaNaTela();


document.getElementById("formFile").addEventListener("change", function() {
    
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result)
    })

    const newImage = reader.readAsDataURL(this.files[0]);

   
})