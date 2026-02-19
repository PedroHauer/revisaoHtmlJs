// Crie um array com 3 frutas e imprima cada uma no console.
// Adicione mais uma fruta ao array e imprima o array atualizado.
// Remova a última fruta do array e imprima o array atualizado.

let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(fruta => console.log(fruta));
frutas.push("uva");
console.log(frutas);
frutas.pop();
console.log(frutas);
