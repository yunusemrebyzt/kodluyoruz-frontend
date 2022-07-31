let name = prompt("Adınızı giriniz: ")

let myName = document.getElementById('myName')
myName.innerHTML = name



function showTime(){
    let date = new Date()
    let time = document.getElementById('myClock')
    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

    time.innerHTML = ` ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()} ${days[date.getDay()]}`

    setTimeout(showTime,1000)
}
showTime();