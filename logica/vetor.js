/*
Mudando posoção dentro do vetor

let vetor = [10,20,30,40,50];
vetor[2] = '30';
console.log(vetor);*/

/* Inserindo com o comando "push", as informações dentro de um vetor vazio e somando a cada interação
let vetor = [];
for(let i = 0; i < 10; i++){
    vetor.push(i);
}
console.log(vetor);
*/

/*
Utilizando o for para percorrer o vetor e usando o comando length (Retorna exatamente o tamanho do vetor)

let vetor = [10,20,30,40,50,60,70,80,90];
for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}
*/

/*
Percorrendo o vetor utulizando "For of" onde a variável que decharamos assume diretamente os valores dos elementos, acessando a váriavel número sem se preocupar com o tamanho do vetor

let vetor = [10,20,30,40,50,60,70,80,90];
for(let numero of vetor){
    console.log(numero);
}*/

let vetor = [10,20,30,40,50,60,70,80,90];
for(let indice in vetor){
    console.log(vetor[indice]);
}

