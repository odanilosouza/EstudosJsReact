const agenda = {
    contatos: [
        {nome: 'contato1', telefone: 'telefone1', email: 'email1@teste.com'},
        {nome: 'contato2', telefone: 'telefone2', email: 'email2@teste.com'},
        {nome: 'contato3', telefone: 'telefone3', email: 'email3@teste.com'},
        {nome: 'contato4', telefone: 'telefone4', email: 'email4@teste.com'}
       
    ],
    adicionar: function(contatos){this.contatos.push(contato)}
}

console.log(agenda.contatos);