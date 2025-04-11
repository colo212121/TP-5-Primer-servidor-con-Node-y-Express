export function horaActual() {
    const fechaActual = new Date()
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    return `son las ${horas}:${minutos}:${segundos}`
}

export function horaCompleta() {
    const dia = new Date()
    return `hoy es ${dia}`
}