import { Pessoa } from './pessoa.js';




const user = new Pessoa();

user.nome = 'Jonathan'
user.idade = 25;
user.cpf = 12345678912;
user.telefone = '47 9922-4736'
user.idAAtivo = true;
user.eAssinante = 'Sim';

document.getElementById('nome').innerHTML = `Nome:   ${user.nome}`;
document.getElementById('idade').innerHTML = `Idade: ${user.idade}`;
document.getElementById('telefone').innerHTML = `Telefone: ${user.telefone}`;
document.getElementById('eAssinante').innerHTML = `Assinante: ${user.eAssinante}`;

console.log(user.criarPessoa());

console.log(user.montarObjPessoa());

console.log(user.imprimirPessoa());

let viewPessoa = user.imprimirPessoa();

let arrayPessoas = [];

arrayPessoas.push(viewPessoa);


