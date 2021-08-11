function criarQuadrado(base, altura){

    let cor = 'blue';

    return {
        base,
        altura,
        getCor: function(){return cor;}
    };
}

const quadrado = criarQuadrado(3,4);
quadrado.cor ='red';
console.log(quadrado.getCor());