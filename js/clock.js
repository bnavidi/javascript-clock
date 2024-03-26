
let userName = prompt("Lütfen adınızı giriniz:")


function updateTime() {
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let dayFormal = day.toString().length == 1 ? "0"+ day.toString() : day.toString();
let monthFormal = month.toString().length == 1 ? "0"+ month.toString() : month.toString();
let yearFormal = year.toString().length == 1 ? "0"+ year.toString() : year.toString();

let dayIndex = date.getDay();
let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
let dayName = days[dayIndex];

let today = `${dayFormal}.${monthFormal}.${yearFormal} - ${dayName}`

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let hourFormal = hour.toString().length == 1 ? "0"+ hour.toString() : hour.toString();
let minuteFormal = minute.toString().length == 1 ? "0"+ minute.toString() : minute.toString();
let secondFormal = second.toString().length == 1 ? "0"+ second.toString() : second.toString();

let time = `${hourFormal}:${minuteFormal}:${secondFormal}`

let myClock = document.querySelector("#myClock")
myClock.innerHTML = `${today} <br> ${time}`
}


let myName = document.querySelector("#myName")
myName.innerHTML = userName;
 

setInterval(updateTime, 1000)



