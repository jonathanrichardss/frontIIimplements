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

    pessoa.criarPessoa(); 
    pessoa.minhaFunction();
    
}

//Grava uma imagem no local storage através do DOM, pelo seletor ID

const form = document.getElementById('formFile');

if (form) {

    form.addEventListener('change', function () {

        const reader = new FileReader();
        console.log(reader);
        reader.addEventListener("load", () => {
            localStorage.setItem("recent-image", reader.result)
        })
    
        reader.readAsDataURL(this.files[0]);
    
    
    });


    window.onsubmit = ('submit', function(e) {
        
        e.preventDefault();
        const user = new Pessoa();

        
        user.imprimirPessoa();
        
        
            
    }); 
}






  
