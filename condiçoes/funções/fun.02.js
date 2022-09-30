function soma(n1, n2 ){
    return n1 + n2
}
console.log(soma(2,89))

/** o exercicio acima retornou o valor '7' no console puxando a soma de (2,7). porem sem colocarmos um valor apenas nao existirá resultado ou seja, o console nao reconhecerá o  resultado 'NaN'. para que isso nao acontence podemos dar o valor nos parametros para quando so um n1 for digitado que apresenta apenas valor apresentado. fica o seguinte: function soma (n1=0, n2=0) logo, se for digitado no consolo.log(soma(7)) o resultado é 7 se for consolo.log(soma(7,7)) retorna 14 */