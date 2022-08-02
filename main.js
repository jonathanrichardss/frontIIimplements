import Pessoa from './pessoa.js';

window.imprimirPessoaNaTela = function imprimirPessoaNaTela() {
    const pessoa = new Pessoa();
    
    

    pessoa.imprimirPessoaNaTela();
}


// document.getElementById("formFile").addEventListener("change", function() {
    
//     const reader = new FileReader();

//     reader.addEventListener("load", () => {
//         localStorage.setItem("recent-image", reader.result)
//     })

//     const newImage = reader.readAsDataURL(this.files[0]);

   
// })