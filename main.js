import Pessoa from './pessoa.js';


window.criarPessoa = function criarPessoa() {
    const pessoa = new Pessoa();


    pessoa.nome = document.querySelector('#nome-input').value;
    pessoa.idade = document.querySelector('#idade-input').value;
    pessoa.telefone = document.querySelector('#telefone-input').value;
    pessoa.eAssinante = document.querySelector('#eAssinante-input').value;  

    pessoa.criarPessoa();

    localStorage.setItem('nome', pessoa.nome);
    localStorage.setItem('idade', pessoa.idade);
    localStorage.setItem('telefone', pessoa.telefone);
    localStorage.setItem('eAssinante', pessoa.eAssinante);
}

window.onload = function imprimirPessoa() {
    const user = new Pessoa();

    user.imprimirPessoa();
}



document.getElementById('formFile').addEventListener('change', function() {
    
    const reader = new FileReader();

    reader.addEventListener("load", () =>  {
                localStorage.setItem("recent-image", reader.result)
    })

    reader.readAsDataURL(this.files[0]);

   
 })

 document.addEventListener("DOMContentLoaded", () => {
    
    const recentImg = localStorage.getItem("recent-image");

    if (recentImg) {
        document.getElementById('img-id').setAttribute('src', recentImg);
    }
    
 })