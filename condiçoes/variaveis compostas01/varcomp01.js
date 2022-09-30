/**VARIAVEL COMPOSTA ou um ARRAY em português VETOR (a), É uma variavel composta de elemento| UM ELEMENTO agrupa espaço da memoria, o valor colocado dentro dele  e contem INDICE/CHAVE ou em ingles KEY para sua identificação e o seus respectivos CONTEUDOS.
 * 
 * EXEMPLO: let num =[ , , ]  usei let, mas poderia ser var; ele vai guardar não apenas um numero, mas varios numero separados de virgulas. | Ao guardando esses numeros, vai criando suas chaves/indices automaticamente. exemplo:
   */
 

let num = [40,69,10,12]
    num.sort()
    num.push(9)
  console.log(`os valores que queremos no let num é ${num}`)
  console.log(`o valor da primeira casa é ${num[1]}`)
 
  

  /**num eventual desejo de acrescentar mais conteudos, usa-se num[] dendtro dos colchetes colocar a posiçao que nao exitia exemplo: num[6]. O valor ou conteudo que recebe exemplo: num[5] = 6| No caso da duvida sobre as posiçoes, se quiser colocar qualquer elemento na ultima posiçao, usa o comando num.push() e coloca o seu valor dentro dos parenteses.| para saber o cumprimento ou quantas conteudos tem guardada na memoria, usa-se comando num.length. Esse comando conta quanatas casas, quantas elementos existentes| outro elemento importante para ordenar os elementos ou deixa-los na ordem crescente usa-se num.sort() */

