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

        document.getElementById('nome').innerHTML = `Nome: ${localStorage.getItem('nome')}`;
        document.getElementById('idade').innerHTML = `Idade: ${localStorage.getItem('idade')}`;
        document.getElementById('telefone').innerHTML = `Telefone: ${localStorage.getItem('telefone')}`;
        document.getElementById('eAssinante').innerHTML = `Assinatura: ${localStorage.getItem('eAssinante')}`;

    }

    imprimirPessoaNaTela() {

    this.imprimirPessoa();
    


    }


}

export default Pessoa;