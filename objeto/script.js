const pessoa = {nome: 'Danilo', idade: 26};

console.log(pessoa.nome);

const quadrado = {
    base:10,
    altura: 20,
    calculaAreal: function(){return this.base*this.altura}
};

console.log(quadrado.calculaAreal());