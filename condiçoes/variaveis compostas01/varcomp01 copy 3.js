/*
OBSERVAÇÃO: FIZ ESSA TERCEIRA COPIA PARA PUDER DEMOSTRAR COMO IDENTIFICAR OU BUSCAR VALORES DENTRO DE VETORES.

*/

/**VARIAVEL COMPOSTA ou um ARRAY em português VETOR (a), É uma variavel composta de elemento| UM ELEMENTO agrupa espaço da memoria, o valor colocado dentro dele  e contem INDICE/CHAVE ou em ingles KEY para sua identificação e o seus respectivos CONTEUDOS.
 * 
 * EXEMPLO: let num =[ , , ]  usei let, mas poderia ser var; ele vai guardar não apenas um numero, mas varios numero separados de virgulas. | Ao guardando esses numeros, vai criando suas chaves/indices automaticamente. exemplo:
   */
 

/*
let num = [40,69,10,12]
    num.sort()
    num.push(9)
  console.log(`os valores que queremos no let num é ${num}`)
  console.log(`o valor da primeira casa é ${num[1]}`)  






  let valores = [8, 29, 38,17, 3,49,01,28,47,51,2,9]
valores.push(0)
valores.sort()
console.log(valores)
console.log(`o vetor tem ${valores.length} posições`)
console.log(`O primeiro vetor é valor ${valores[0]} e a ultima é ${valores[11]}`)
*/
 
  

  /**num eventual desejo de acrescentar mais conteudos, usa-se num[] dendtro dos colchetes colocar a posiçao que nao exitia exemplo: num[6]. O valor ou conteudo que recebe exemplo: num[5] = 6| No caso da duvida sobre as posiçoes, se quiser colocar qualquer elemento na ultima posiçao, usa o comando num.push() e coloca o seu valor dentro dos parenteses.| para saber o cumprimento ou quantas conteudos tem guardada na memoria, usa-se comando num.length. Esse comando conta quanatas casas, quantas elementos existentes| outro elemento importante para ordenar os elementos ou deixa-los na ordem crescente usa-se num.sort() */


  /**
   NOTA: SABEMOS QUE PARA LOCALIZAR VETORES USAMOS console.log(num [0]), ou seja, USAMOS NUMERO DE POSIÇÃO PARA QUE O CONTEUDOS SEJAM EXIBIDOS. NAO OBSTANTE UTILIZAVEL, POREM NAO É MELHOR PRATICA, PORÉM FICA REPETETIVO E CANSATIVO. PARA ISSO USASSE O METODO DA REPETIÇAO ATRAVES DA ESTRUTURA FOR COM VARIAVEL POS OU SEJA, POSIÇAO, COMO VIMOS NA AULA PASSADA.
   * 
   */

   /*let valores = [8, 29, 38,17, 3,49,01,28,47,51,2,9]
  
   for(pos = 0; pos<num.length; p++){
    console.log(num[pos])
  }*/


  /* no exemplo acima fizemos criamos a estrutura for seguindo sua sintaxe. colocamos a incialização (variavel pos =0); e em seguida, (pos<num.length) ou seja, enquanto pos for menor que as posições, adicionaremos (pos++) ou seja, atribuir pos mais 1pos. no bloco/entre as chaves o cosole.log(num[]), em vez de levar o numero de posição entre colchetes, leva pos num[pos]   */ 

 /* let valores = [8, 29, 38,17, 3,49,01,28,47,51,2,9]
  
   for(pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
  }
  */

/* O EXEMPLO ACIMA NAO É MANEIRA MAIS SIMPLES DE REALIZAR ESSES OBJETIVOS. USA-SE for(let pos in num){console.log (num[pos])} o que se lê de seguinte maneira: para cada posição dentro de num (let pos in num) eu mostrarei o num pos, que fica assim... console.log(num[pos]) 
OBS. ESSE METTO DO SO FUNCIANA COM OBJETOS E ARRAYS
*/

/*let valores = [8, 29, 38,17, 3,49,01,28,47,51,2,9]
valores.sort()
for(let pos in valores) {
  console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
} */

/* 
PARA BUSCAR ESSES VALORES USA-SE O METODO num.indexOf() obs. o 'O' de 'Of' tem que ser maíscula.
*/

let valores = [8, 29, 38,17, 3,49,01,28,47,51,2,9]
valores.sort()

console.log(valores)

console.log(`O vetor tem ${valores.length} posições`)

console.log(`o primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(9)
if(pos == -1){
  console.log('o valor não encontrado')
} else{
         console.log(`o valor está na posição ${pos}`)
}

/* as condiçoes if e else que acabaram de ser usados é na posibilidade de, em vez do valor nao encontrado retornar -1, substitui-lo com mensagem (não encontrado) e se for encontrado mantemos o comando discriminado no else. */

