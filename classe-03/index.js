function taAberto(chegadaCliente) {
    const abertura = new Date(+chegadaCliente)
    const fechamento = new Date(+chegadaCliente)
    abertura.setHours(8, 0, 0, 0)
    fechamento.setHours(18, 0, 0, 0)
    return +chegadaCliente >= +abertura && +chegadaCliente <= +fechamento
}
console.log(taAberto(new Date(2021, 10, 01, 8, 30, 30)))

console.log(taAberto.getDay());

