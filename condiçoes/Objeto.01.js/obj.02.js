let Hodavio = { 
    nome: 'Hodavio Jose',
    idade: '30 anos',
    altura: '1,90',
    peso: 90,
    sexo: 'M',
    engordou(e=0) {
        console.log('engordou')
        this.peso += e

    }
}
Hodavio.engordou(9)
console.log(`${Hodavio.nome} pesa ${Hodavio.peso} kg`)

/**a funçao engordar vai depender do nume do numero que colocamos no Hodavio.engordou */