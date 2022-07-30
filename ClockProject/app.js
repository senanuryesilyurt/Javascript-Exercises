let userName=prompt("Adınızı giriniz.")
let info = document.getElementById("myName")
info.innerHTML=`${userName}`

function showClock(){
    let now=new Date()
    return now.toLocaleTimeString()
}

function showTime() {
    let date=document.getElementById("myClock")
    date.innerHTML=showClock()
}
showTime()
setInterval(() => {
    showTime() 
}, 1000);


let day
let now=new Date()
if(now.getDay()==1){
    day="Pazartesi"
}
else if(now.getDay()==2){
    day="Salı"
}
else if(now.getDay()==3){
    day="Çarşamba"
}
else if(now.getDay()==4){
    day="Perşembe"
}
else if(now.getDay()==5){
    day="Cuma"
}
else if(now.getDay()==6){
    day="Cumartesi"
}
else if(now.getDay()==7){
    day="Pazar"
}

let gun=document.getElementById("day")
gun.innerHTML=`${day}`