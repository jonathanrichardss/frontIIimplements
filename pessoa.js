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

    // user.nome = document.getElementById('nome-input').value;
    // user.telefone = document.getElementById('idade-input').value;
    // user.telefone = document.getElementById('telefone-input').value;
    // user.eAssinante = document.getElementById('eAssinante-input').value;
    

    
    window.location.href = "http://127.0.0.1:5500/index.html";

    var li = document.createElement('li');
    var text = document.createTextNode('teste');
    li.appendChild(text);

    document.getElementById('nome').appendChild(li);

        
    // document.getElementById('nome').innerHTML = `Nome:   ${user.nome}`;
    // document.getElementById('idade').innerHTML = `Idade: ${user.idade}`;
    // document.getElementById('telefone').innerHTML = `Telefone: ${user.telefone}`;
    // document.getElementById('eAssinante').innerHTML = `Assinante: ${user.eAssinante}`;

    
 

    }


}

export default Pessoa;