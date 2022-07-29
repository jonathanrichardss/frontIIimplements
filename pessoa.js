import { Perfil } from "./perfil.js";

    
export default class Pessoa extends Perfil {
    
    constructor(nome, idade, cpf, telefone, idAAtivo, eAssinante) {
        super(idAAtivo, eAssinante);  

        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.cpf = cpf;
        
    }

    criarPessoa() {

    return({
      nome:  this.nome,
      idade:  this.idade,
      cpf:  this.cpf,
      telefone: this.telefone,
      idAAtivo:  this.idAAtivo, 
      eAssinante:  this.eAssinante 
    })

    }

    montarObjPessoa() {
        const obj = this.criarPessoa();
        return JSON.stringify(obj)
    }

    imprimirPessoa() {
        const imprimeObj = this.montarObjPessoa();

        return (String(imprimeObj));
    }

    imprimirPessoaNaTela() {

    const user = new Pessoa();
    
    window.location.href = "http://127.0.0.1:5500/index.html";


    document.getElementById('nome').innerHTML = `Nome:   ${user.nome}`;
    document.getElementById('idade').innerHTML = `Idade: ${user.idade}`;
    document.getElementById('telefone').innerHTML = `Telefone: ${user.telefone}`;
    document.getElementById('eAssinante').innerHTML = `Assinante: ${user.eAssinante}`;

    }


}

export { Pessoa }