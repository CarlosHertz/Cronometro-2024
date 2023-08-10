const hora = document.querySelector('#horas')
const minuto = document.querySelector('#minutos')
const segundo = document.querySelector('#segundos')
const dia = document.querySelector('#dias')

let tempo = setInterval(relogio,1000)

setInterval(relogio, 1000)

function relogio(){
    let sistema = new Date()
    let horas = sistema.getHours()
    let minutos = sistema.getMinutes()
    let segundos = sistema.getSeconds()
 
    let diferenca =  new Date("1 January 2024") - sistema  
    let diasTotais = Math.floor(diferenca/(1000 * 60 * 60 * 24)) 

 if(horas<10){
    horas="0" + horas
 }
 if(minutos<10){
    minutos="0" + minutos
 }
 if(segundos<10){
    segundos="0" + segundos
 }
 dia.textContent= diasTotais
 hora.textContent=23-horas
 minuto.textContent=59-minutos
 segundo.textContent=59-segundos


}