/*const valorOriginal = 199.0;
const dataVencimento = new Date('2020-01-15');
const percentualMulta = 0.10;

const dataPagamento = new Date();

let valorTotal = 0.00;
if (dataPagamento > dataVencimento) {
  valorTotal = valorOriginal + (valorOriginal * percentualMulta);
} else {
  valorTotal = valorOriginal;
}

console.log('O valor total para pagamento é de: R$ ' + valorTotal);

*/
const listaAprovados = ["Mariana", "João", "Rafael", "Beatriz", "Pedro", "Olívia"];
const novoAprovado = "Rafaela";
//linha 3
listaAprovados.unshift(novoAprovado)
console.log("A lista de aprovados atualizada é: \n", listaAprovados);

/*
 * OUTPUT:
 * 
 * A lista de aprovados atualizada é
[ 'Rafaela',
  'Mariana',
  'João',
  'Rafael',
  'Beatriz',
  'Pedro',
  'Olívia' ]
 * */

   