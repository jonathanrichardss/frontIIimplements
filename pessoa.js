import Perfil from './perfil.js'; //Aqui importamos a classe Perfil para o módulo Pessoa 


//Definindo a classe Pessoa com seus atributos, funções e também o construtor.
class Pessoa extends Perfil {
    
    constructor(nome, idade, cpf, telefone, idAAtivo, eAssinante) {
        super(idAAtivo, eAssinante);  

        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.cpf = cpf;
        
    }

    criarPessoa() { 

        const pessoa = new Pessoa();

        pessoa.minhaFunction();
        
        
    }

    imprimirPessoa() {

        let validaObj = this.criarObjetoProperties();

        if(validaObj != null) {
            console.log(validaObj)
            document.getElementById('nome').innerHTML = `Nome: ${validaObj.nome}`;
            document.getElementById('idade').innerHTML = `Idade: ${validaObj.idade} anos`;
            document.getElementById('telefone').innerHTML = `Telefone: ${validaObj.telefone}`;
            document.getElementById('eAssinante').innerHTML = `Cidade: ${validaObj.eAssinante}`;

        } 
        

    }

    minhaFunction() {
        const recentImg = localStorage.getItem("recent-image");
     
        if (recentImg != null) {
            console.log('teste');
            console.log(document.getElementById('img-id'));
            document.getElementById('img-id').setAttribute('src', recentImg);
        }
        
        
    }

    criarObjetoProperties() {

        const nome = localStorage.getItem('nome');
        let idade = localStorage.getItem('idade');
        const telefone = localStorage.getItem('telefone');
        const eAssinante = localStorage.getItem('eAssinante');
        
        return ({
           nome,
           idade,
           telefone,
           eAssinante
        })

    }

    converteData(idade) {
        
        let dataA = new Date(idade);
        let dataB = new Date();
        const diff = (dataB.getFullYear() - dataA.getFullYear());

        return diff;
    }

}

export default Pessoa; //Exportando a classe Pessoa de forma padrão.