//taAberto(newDate(2021,3,25,12)); // deve retornar false, pois é um domingo
//taAberto(newDate(2021,3,26,12)); // deve retornar true, pois é uma segunda
//taAberto(newDate(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)
//taAberto(newDate(2021,3,24,9,30)); // deve retornar true, pois é sábado de manhã (9h30)
const taAberto = new Date(2021, 3, 24, 9, 302);
if (taAberto.getDay() >= 1 && taAberto.getDay() <= 5 &&
    taAberto.getUTCHours() >= 11 && taAberto.getUTCHours() <= 21) {
    console.log(true)
} else if (taAberto.getDay() = 6 &&
    taAberto.getUTCHours() >= 11 && taAberto.getUTCHours() <= 15) {
    console.log(true)
}
else {
    console.log(false)
}
