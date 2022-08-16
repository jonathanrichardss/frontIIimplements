import Pessoa from './pessoa.js'; //Aqui importamos a classe Pessoa para o módulo main do projeto


//Através do objeto window chamo a função criarPessoa() e invoco os métodos que interessam nesse contexto
window.criarPessoa = function criarPessoa() {

    const pessoa = new Pessoa();

    
    pessoa.nome = document.querySelector('#nome-input').value;
    pessoa.idade = document.querySelector('#idade-input').value;
    pessoa.telefone = document.querySelector('#telefone-input').value;
    pessoa.eAssinante = document.querySelector('#eAssinante-input').value;


    localStorage.setItem('nome', pessoa.nome);
    localStorage.setItem('idade', pessoa.converteData(pessoa.idade));
    localStorage.setItem('telefone', pessoa.telefone);
    localStorage.setItem('eAssinante', pessoa.eAssinante);

    pessoa.criarPessoa(); 
   
    
}

//Grava uma imagem no local storage através do DOM, pelo seletor ID
const input = document.getElementById('input');


if (input != null) {

    input.addEventListener('change', function () {

        const reader = new FileReader();
        console.log(reader);
        reader.addEventListener("load", () => {
            localStorage.setItem("recent-image", reader.result)
        })
    
        reader.readAsDataURL(this.files[0]);
    
       
    });
        
   
     
}

//Instancia um novo objeto do tipo Pessoa.
const pessoa = new Pessoa();

//Validamos se esse objeto é nulo ou não.
if (pessoa != null) {
    pessoa.imprimirPessoa();
    pessoa.minhaFunction();
}

//Trocamos a cor de fundo da segunda página para uma animação.
 function mudaBg() {
    
    const images = [

        'url("./images/1.jpg")',
        'url("./images/2.jpg")',
        'url("./images/3.jpg")',
        'url("./images/4.jpg")',
        'url("./images/5.jpg")',
        'url("./images/6.jpg")',
        'url("./images/7.jpg")'
    ]

    const body = document.getElementById('body-container');
    const bg = images[Math.floor(Math.random() * images.length)];

    body.style.backgroundImage = bg;
    body.style.transition = '0.3s';
    body.style.transitionDelay = '0.3'
   
 }

//Definindo com base no que vai ser a mudança e o TimeOut para ocorrer o evento.
setInterval(mudaBg, 2500);

