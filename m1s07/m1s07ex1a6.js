// Exercicio 1 - Classe Produto
class Produto {
    nome;
    preco;
    quantidade;

// Exercicio 2 - Construtor da Classe Produto
    constructor (valorNome, valorPreco, valorQuantidade) {
    this.nome = valorNome
    this.preco = valorPreco
    this.quantidade = valorQuantidade
    }

// Exercício 3 - Método Vender
    Vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade){
    console.log("Estoque insuficiente")
    console.log(`Existe apenas ${this.quantidade} unidades disponíveis`)
    return
    }
    this.quantidade -= quantidadeVendida
    }

// Exercício 4 - Método Repor
    Repor(quantidadeReposta){
    this.quantidade += quantidadeReposta
    }

// Exercício 5 - Método Mostrar Estoque
    MostrarEstoque(){
    console.log(`O produto possui ${this.quantidade} unidades disponíveis em estoque!`)
    }

// Exercício 6 - Método Atualizar Preco
    AtualizarPreco(novoPreco){
    this.preco = novoPreco
    }
}

// Teste de funcionamento
const camisa = new Produto ("Camisa", 59.99, 20)
camisa.Vender(10)
camisa.Repor(5)
camisa.Vender(12)
camisa.AtualizarPreco(79.99)
camisa.MostrarEstoque()

console.log(camisa)