/*Filter é parecido com o p "map", mas ao invés de retornar o valor manipulado, retornamos um valor verdadeiro ou falso. 

Se for verdadeiro a gente mantem, se for falso descarta */

const vetor = [1,2,3,4,5,6,7,8,9,10];
const pares = vetor.filter(x => x%2 ===0);

//Outra forma de fazer
const pares = vetor.filter(function(x){return x%2==0});

console.log(pares);