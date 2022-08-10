import Pessoa from './pessoa.js'; //Aqui importamos a classe Pessoa para o main do projeto


//Através do objeto window chamo a função criarPessoa() e invoco os métodos que interessam nesse contexto
window.criarPessoa = function criarPessoa() {

    const pessoa = new Pessoa();

    
    pessoa.nome = document.querySelector('#nome-input').value;
    pessoa.idade = document.querySelector('#idade-input').value;
    pessoa.telefone = document.querySelector('#telefone-input').value;
    pessoa.eAssinante = document.querySelector('#eAssinante-input').value;

    
    localStorage.setItem('nome', pessoa.nome);
    localStorage.setItem('idade', pessoa.idade);
    localStorage.setItem('telefone', pessoa.telefone);
    localStorage.setItem('eAssinante', pessoa.eAssinante);

    window.location.href = 'index.html';

    pessoa.criarPessoa(); 
    //pessoa.minhaFunction();
    //const user = new Pessoa();
    //window.location.href = './index.html';
 

   
    
}

//Grava uma imagem no local storage através do DOM, pelo seletor ID

const input = document.getElementById('input');


if (input) {

    input.addEventListener('change', function () {

        const reader = new FileReader();
        console.log(reader);
        reader.addEventListener("load", () => {
            localStorage.setItem("recent-image", reader.result)
        })
    
        reader.readAsDataURL(this.files[0]);
    
       
    });
        
   
     
}

const pessoa = new Pessoa();

if (pessoa != null) {
    pessoa.imprimirPessoa();
    pessoa.minhaFunction();
}



    