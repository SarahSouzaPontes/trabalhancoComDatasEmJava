//taAberto(newDate(2021,3,25,12)); // deve retornar false, pois é um domingo
//taAberto(newDate(2021,3,26,12)); // deve retornar true, pois é uma segunda
//taAberto(newDate(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)
//const ehDomingo = new Date(2021, 3, 25, 12);
//const ehSegunda = new Date(2021, 3, 26, 12);
//const ehCedo = new Date(2021, 3, 26, 7, 59);
//Uma determinada loja funciona das 8h00 (já aberto) as 18h (ainda aberto, fechado as 18h01), mas somente de segunda a sexta. Faça uma função que recebe como argumento um objeto Date do JS, representando o momento em que o cliente chega na loja. Sua função deverá retornar `true` caso a loja esteja aberta e `false` caso a loja esteja fechada.

const taAberto = new Date(2021, 3, 25, 12);
if (taAberto.getDay() >= 1 && taAberto.getDay() <= 5 &&
    taAberto.getUTCHours() >= 11 && taAberto.getUTCHours() <= 21) {
    console.log(true)
}
else {
    console.log(false)
}
