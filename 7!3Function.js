// Atividade requisitada pelo professor

let armazenarValores1 = "Modelo";
let armazenarValores2 = true;

function cad (Produto, cor){
    armazenarValores1 = Produto + ' ' + cor;
};

function concrad (senha){
    armazenarValores2 = senha;
};

console.log(armazenarValores1, armazenarValores2);
cad("Pipoca", "branca");
concrad("false");
console.log(armazenarValores1, armazenarValores2);