import { Pessoa } from './pessoa.js';
import { Perfil } from './perfil.js';



const user = new Pessoa();

user.nome = 'jonathan'
user.idade = 15;
user.cpf = 12345678912
user.idAAtivo = true;
user.eAssinante = 'S';


console.log(user);

console.log(user.criarPessoa());

console.log(user.imprimirPessoa());


document.getElementById('teste').innerHTML = user.imprimirPessoa();

