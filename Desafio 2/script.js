const stringInicial = "Ana, 89,78, Maria, 45.8, 27, 56, Paula Pereira, 978, A, VIVA, 35, 125, 8999,";

function separandoDados(input) {
  const itens = input.split(',').map(item => item.trim()).filter(item => item !== '');

  const numeros = [];
  const strings = [];

  // Regular expressão para verificar se um valor é numérico
  const padraoNumerico = /^-?\d+(\.\d+)?$/;

  itens.forEach(item => {
    if (padraoNumerico.test(item)) {
      numeros.push(parseFloat(item)); 
    } else {
      strings.push(item);
    }
  });

  return { numeros, strings };
}

const resultado = separandoDados(stringInicial);
console.log("Variável com todos os dados: ");
console.log(stringInicial);
console.log("\nSeparando Números: ");
console.log("Números:", resultado.numeros);
console.log("\nSeparando Strings: ");
console.log("Strings:", resultado.strings);