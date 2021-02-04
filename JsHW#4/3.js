let config = {
    porch: 10,
    floor: 25,
    number: 20
}
function alert (data){
    console.log(data);
}
let scanf = require('scanf');
alert('Введите номер квартиры')
let apartment = scanf('%d')
if(Math.ceil(apartment/(config.floor*config.number))<config.porch)
    alert(`квартира находится в подъезде - ${Math.ceil(apartment/(config.floor*config.number))}`)
else alert('Нет такой квартиры')
/*НА ЭТО НЕ ОБРАЩАТЬ ВНИМАНИЕ - ЭТО ЧИСТО ПО ПРИКОЛУ ))
let конфиг = {
    подъезд: 10,
    этаж: 25,
    номер: 20
}
function алерт (data){
    console.log(data);
}
let скань = require('scanf');
алерт('Введите номер квартиры')
let квартира = скань('%d')
if(Math.ceil(квартира/(конфиг.этаж*конфиг.номер))<конфиг.подъезд)
    алерт(`квартира находится в подъезде - ${Math.ceil(квартира/(конфиг.этаж*конфиг.номер))}`)
else алерт('Нет такой квартиры')
*/
