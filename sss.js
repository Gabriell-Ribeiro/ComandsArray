var frutas = ['Maçã', 'Banana']
console.log(frutas.length)
// 2 

var primeiro = frutas[0]
// maça

var ultimo = frutas[frutas.length - 1]
// banana

// iterar um array
frutas.forEach(function (item, indice, array) {
    console.log(item, indice)
})
// maça 0 
// banana 1

var adicionar = frutas.push('Laranja')
console.log(frutas)

var ultimo = frutas.pop()
// remove Laranja (do Final)
console.log(frutas)

var primeiro = frutas.shift()
// remove Maçâ do inicio
console.log(frutas)

var adicionar = frutas.unshift('Morango')
// adiciona ao inicio
console.log(frutas)

frutas.push('Manga')
console.log(frutas)

var pos = frutas.indexOf('Banana')
// 1

var removedItem = frutas.splice(pos, 1)
// assim que se remove um item
console.log(frutas)


// remover itens de uma posicao de indice
var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']
console.log(vegetais)

var pos = 1
var n = 2

var itensRemovidos = vegetais.splice(pos, n)
// isso é como se faz para remover itens, n define o número de itens a se remover
// a partir da posição (pos) em direção ao fim do array.

console.log(vegetais)
console.log(itensRemovidos)

var copiar = frutas.slice()
// é assim que se copia
console.log(frutas)
