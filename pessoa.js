import Perfil from './perfil.js';

    
class Pessoa extends Perfil {
    
    constructor(nome, idade, cpf, telefone, idAAtivo, eAssinante) {
        super(idAAtivo, eAssinante);  

        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.cpf = cpf;
        
    }

    criarPessoa() { 
    
    return({
      nomeUser:  this.nome,
      idadeUser:  this.idade,
      cpf:  this.cpf,
      telefoneUser: this.telefone,
      idAAtivo:  this.idAAtivo, 
      eAssinanteUser:  this.eAssinante 
    })

    }

    montarObjPessoa() {
        const obj = this.criarPessoa();
        return JSON.stringify(obj)
    }

    imprimirPessoa() {

        const validaObj = this.criarObjetoProperties();

        this.minhaFunction();

        if(validaObj != null) {
           
            document.getElementById('nome').innerHTML = `Nome: ${validaObj.nome}`;
            document.getElementById('idade').innerHTML = `Idade: ${validaObj.idade}`;
            document.getElementById('telefone').innerHTML = `Telefone: ${validaObj.telefone}`;
            document.getElementById('eAssinante').innerHTML = `Assinatura: ${validaObj.eAssinante}`;

        }

        

    }

    imprimirPessoaNaTela() {
    
    this.imprimirPessoa();

    }

    minhaFunction() {
        const recentImg = localStorage.getItem("recent-image");
    
        if (recentImg != null) {
            console.log('teste');
            document.getElementById('img-id').setAttribute('src', recentImg);
        }
    }

    criarObjetoProperties() {

        const nome = localStorage.getItem('nome');
        const idade = localStorage.getItem('idade');
        const telefone = localStorage.getItem('telefone');
        const eAssinante = localStorage.getItem('eAssinante');
        
        return {
           nome,
           idade,
           telefone,
           eAssinante
        }

    }

}

export default Pessoa;