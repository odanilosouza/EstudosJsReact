class Quadrado{

    constructor(lado, altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => {return cor; };
        this.setCor = (c) => {cor = c;}
    }
}
const quadrado = new Quadrado(3,4);
quadrado.cor = 'red';
console.log(quadrado.getCor());
console.log(quadrado);