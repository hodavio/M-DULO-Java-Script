/**como trabalhamos na aulas passada, quando declaramos um ARRAY a gente coloca qualquer valor nos colchetes atribuido a um variavel exemp. 'let num = [@ ,@ , @,]'; |logo, cria-se automaticamente os indice/chaves para cada vaga, que geralmente, começa do zero ao infinito para identificar.
 * 
 * Num ARREY por mais que pode levar qualquer valor, as chaves não alteram, o que limita procurar valores atraves do seu identificador proprio. Por exemplo, tenho meus dados registrado num ARRAY, meu nome está na primeira casa, ele vai estar com achave zero(0), meu sobrenome pode pode conter cheve 1, minha idade pode conter 3 por ai... buscar meu nome pela chace 'nome' nao seria melhor do que usar o zero? concorda? para Resolver essa parada, usa-se variavel atribuido a um valor com, em vez de colchetes [], usa-se chaves {}. exemplo let num = {@, @, @, @}. 

 */

let Hodavio = { 
    nome: 'Hodavio Jose',
    idade: '30 anos',
    altura: '1,90',
    peso: 90,
    sexo: 'M',
    
    
}
console.log(Hodavio)

/**ao criar objeto, 'let hodavio' e dentro das chaves colocar os valores 'let hodavio {nome: idade: ...} se colocarmos apenas variavel hodavio no console.log (hodavio) ele traz tdos os dados, mas podemos também trazer apenas o que nos importa exemplo, console.log(hodavio:idade) ai aparece apenas a idade e sucessivamente */