
//console.log("Merhaba Kodlama.io")

//değişken tanımlama
//type safe değil
//var kullanmıyoruz let kullanıyoruz.
/*
var dolarDun = 9.20
dolarDun = "Ankara"
var dolarBugun = 9.30

console.log(dolarDun)
*/
//
/*
let dolarBugun = 9.30
let dolarDun = 9.20
{
    let dolarDun = 9.10 // bunu görmez. ekrana 9.20 yazar. var kullansaydık 9.10 yazardı.
}

console.log(dolarDun)
*/
/*
//diğer veri tipi:const
const euroDun = 11.2
euroDun = 11
console.log(euroDun) //hata aldık. const ile veri atadığında ona artık başka bi şey atayamazsın.
*/


//array
//camelCasing --biz bunu kullanıyoruz.
//Pascalcasing --Kelimelerin ilk halfleri büyük
//birden fazla veriyi aynı değişkende kullanmak için array lerden yararlanırız.
/*
let konutKredileri = ["Konuk Kredisi","Emlak Konuk Kredisi","Kamu Konut Kredisi"]
let konutKredileri2 = [12,"Konuk Kredisi","Emlak Konuk Kredisi","Kamu Konut Kredisi"]

console.log(konutKredileri2)
*/


console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

