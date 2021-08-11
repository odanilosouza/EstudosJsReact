/*Reduce
O objetivo reduce é reduzir um vetor a um valor ou objeto. Por exemplo, somar todos os elementos de um vetor é reduzir ele a um valor. O reduce é um pouco mais complexos que o map e o filter por que deve ser passado um parâmetro a mais.

const vetor = [1,2,3,4,5,6];

const soma = vetor.reduce((estado,item)=> estado+item);

console.log(soma);
*/
const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,3,4]
];

const somaColuna = (estado, item)=>{
    return [estado[0]+item[0]+item[1], estado[1]+item[2]+item[3], estado[2]+item[2]+item[3]]
}

const vetor2 = matriz.reduce(somaColuna, [0,0,0]);
console.log(vetor2)
