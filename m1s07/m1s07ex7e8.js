// Exercicio 7 - Criando classe Pessoa e Construtor
class Pessoa {
    nome;
    idade;
    profissao;

    constructor (valorNome, valorIdade, valorProfissao) {
    this.nome = valorNome;
    this.idade = valorIdade;
    this.profissao = valorProfissao;
    }
}
// Exercicio 8 - Criando classe Cliente herdando classe Pessoa
class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
      super(nome, idade, profissao)
      this.telefone = telefone
      this.email = email
      this.clienteDesde = clienteDesde
    }
}

  const clienteIngo = new Cliente("Ingo", 48, "Analista de Sistemas", "4899999999", "email@email.com", "2020-01-01")
  console.log(clienteIngo)