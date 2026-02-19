// Escreva uma função que recebe uma string como argumento, e imprima no console o resultado com a seguinte condições:
// ”Tamanho até 5 carácteres = pequena”, ”Tamanho até 10 carácteres = média”, ”Tamanho a cima de 10 carácteres = grande”
// Exemplo de resultado: “A string ‘aplicativos’ é grande.”

function avaliarTamanhoString(str) {
    if (str.length <= 5) {
        console.log(`A string '${str}' é pequena.`);
    } else if (str.length <= 10) {
        console.log(`A string '${str}' é média.`);
    } else {
        console.log(`A string '${str}' é grande.`);
    }   
}

avaliarTamanhoString("app");
avaliarTamanhoString("aplicativo");
avaliarTamanhoString("aplicativos");

