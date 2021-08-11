//Variáveis tipo Number
let a = 10;
let b = 13.5;

//variável tipo string
let c = "Danilo";

//Variável boleana, pode ser vedadeira(true) ou falsa(False)
let d = true;

//Posso redefinir uma variável conforme exemplo a baixo:
d= 15;

//Diferença de declarar variável pode ser (let) ou (var)

/*
Diferença:
 Quando criamos uma variável existe um espaço ao qual ela existe, chamamos de escopo. 
Ex:
Quando criamos uma variável dentro de uma função, o escopo dela é a função. Ou seja, se tentarmos acessar essa variável fora dessa função é como se ela não existisse.

Usando o "var", é que a variável escapa do seu escopo. Ou seja, se eu declarar dentro de uma funcção eu consigo acessar ela de fora, causando algums problemas no código;

usando o "Let", garantimos que a palavra não vai fungir do seu escopo;


*/

a = function(){};

let e = null;

console.log(e);

const pi = 3.14;

console.log(pi);

