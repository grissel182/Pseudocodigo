var L = prompt ("Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan en galones. ayuda al productor a saber cuánto recibirá por la entrega de su producción de un día, dime el número de Litros que genera, para convertirlos a galones ")  
var P = prompt ("¿Cuánto le pagan por galón")
var G = 3.785;
var R = L / G 
var pesos = P * R


alert("El numero de galones que cobrará por sus "+ L + " litros es " + R + " y le pagarán " + pesos + " pesos")
