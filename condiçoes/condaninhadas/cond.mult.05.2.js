/*A condição multipla serve para trabalhar valores fixos; ele nao serve muito para valore de intervalo como vemos nas condiçoes aninhadas| Nao tem apenas a possibilidade do SIM e NÃO, ou seja, tem a possibilidade de outros valoes (fixos)| por exemplo,  é orientado "quando tem um valor x, executa tal valor"| a diferença... com aninhada expressada mediante uma CONDIÇÃO, na MULTIPLA, se usa EXPRESSÃO. | As CONDIÇOES ANINHADA (if e else), é aplicada para todos tipo de situação, porém MULTIPLA Ele é util na situaçao ESPECIFICA */

/*LEMBRANDO: esse tipo de condição é representada por comando switch(expressao) {}. dentro das chaves coloca valores ex. {case valor  2:
case valor 3:
case valor 4: e no final, se nenhum dos valores de cima forem satisfeitos, executa o DEFAULT que tem a mesma funçao que ELSE} 

OBSERVAÇÃO: Dentro de cada bloco de valores é preciso colocar um BREAK e na ultima é opcional| o BREAK quando o numero da semana for digitado, ele interrompe a que faça leitura dos sucessores, portanto permite apenas que seja lida o console.log daquilo que foi chamado, por isso que é importante me cada discrição  */
var atual = new Date()
var diaSem = atual.getDate
/* colocando os numeros na frente do diaSem = () desde que se seja valido, sera exibida no node */
diaSem = 05

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 3: 
        console.log('Terça')
        break
    case 4:
        console.log ('Quarta-feira')
        break
    case 5:
        console.log('Quinta-feira')
        break
    case 6: 
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('dia inválido')
        break

}