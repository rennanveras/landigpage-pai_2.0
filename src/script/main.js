const dataDeInicio = new Date("May 03, 2000 00:00:00");

const hoje = Date.now();
const diff = Math.abs(hoje - dataDeInicio.getTime())
const tempoDeTrabalho = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

document.getElementById('tempo').innerText = tempoDeTrabalho;
