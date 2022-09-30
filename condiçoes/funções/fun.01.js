/*As funçoes cumprem com seguintes etapas conhecidas como CHAMADA (Comando de pedidos, Ordens), os PARAMETROS (O valor da entrada para adquirir algo que queira, ou requerida pela CHAMADA), O AÇÃO (açao para adquirir o objetos que precisar) e o RETORNO (açao de retornar o resultado). 

RESUMO: são  AÇÃO executadas assim que sao CHAMADAS ou em decorrencia de algum EVENTO.

Uma FUNÇÃO pode receber PARAMETROS e retornar um RESULTADO.
*/

/** EXEMPLOS: voce cria qualquer função (function) e dá um nome a ele, ou a ORDEM/CHAMADA (function parimpar) em seguida coloque um PARAMETROS 'function parimpar(n)' e dentro da função 'function' criar condiçoes. 'function parimpar(n){if(n%2==0){retur 'par'} else {retour 'impar'}}  o seguinte epressao de condiçoes explica o seguinte: na divisão, se o resto do parametro 2 (n%2 == 0) é igual a zero, que retorno seja 'par' caso contrario que seja impar.
 * para aquirir        essa resposta temos que fazer a chamada e para essa CHAMADA cria-se uma variavel var/let EXEMPLO: let res = parimpar(n)
 */

function parimpar(n){
    if (n% 2 == 0){
        return 'par'
    } else { return 'impar'

    }
    
}
let res = parimpar(284)
console.log(res)
/** a chamada pode ser também simplificada usando diretamente 'console.log(parimpar(n))' que o resultado será a mesma coisa */