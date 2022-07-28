import { Perfil } from "./perfil.js";

    
export default class Pessoa extends Perfil {
    
    constructor(nome, idade, cpf, idAAtivo, eAssinante) {
        super(idAAtivo, eAssinante);  

        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        
    }

    criarPessoa() {
    return({
      nome:  this.nome,
      idade:  this.idade,
      cpf:  this.cpf,
      idAAtivo:  this.idAAtivo, 
      eAssinante:  this.eAssinante 
    })

    }

    imprimirPessoa(pessoa) {
        const obj = this.criarPessoa();

    return JSON.stringify(
        
        `Nome:  ${obj.nome} 
        Idade:  ${obj.idade} 
        Status:  ${obj.idAAtivo} 
        Assinante: ${obj.eAssinante} `

    ) 

    }
}


export { Pessoa };