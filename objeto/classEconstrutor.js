class pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

const pessoa1 = new pessoa('carlos', 20, 'masculino');
pessoa1.idade=21;
console.log(pessoa1);

const pessoa2 = new pessoa('Laura', 36, 'feminino');
console.log(pessoa2);