'use strict'

function BinarioADecimal(num) {
  let resultado = 0;
  for (let i = 0; i < num.length ; i++){
    resultado += +num[i] * 2 ** (num.length -1 - i )
    
  }
  return resultado
}

function DecimalABinario(num) {
  var binario = "";
    while (num > 0) {
        binario = num % 2 + binario;
        num = Math.floor(num - num / 2)
    }
    return binario;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}