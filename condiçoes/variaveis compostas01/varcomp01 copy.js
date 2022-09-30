/*
OBSERVAÇÃO: FIZ ESSE COPIA PARA PUDER MANTER OS COMENTARIOS E SEGUIR COM EXERCICIOS RELACIONADO A MESMA TEMÁTICA.

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

  let valores = [8, 29, 38,17, 3,49,01,28,47,51,2,9]
  
   for(pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
  }
