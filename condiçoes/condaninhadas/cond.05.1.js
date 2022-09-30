var atual = new Date()
var pizzaria = atual.getHours()
if(pizzaria < 19 || pizzaria == 24) {
    console.log('Fechada')
}
else if (pizzaria >= 19 && pizzaria < 24 ){
     console.log ('Aberta')


}