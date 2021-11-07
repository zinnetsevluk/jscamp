/*1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
(Araştırma konusu : şart blokları : if )
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
*/

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let count = 0;
      for (let j = 1; j <= numbers[i]; j++) { 
        if (numbers[i] % j == 0) {
          count++;
        }
      }
      if (count == 2) {
        console.log(numbers[i]+ " asal sayıdır.");
      } else {
        console.log(numbers[i]+ " asal sayı değildir.");
      }
    }
  }
  findPrime(2,5,8,21, 13) 
  findPrime(3,5)
  
  

  /*2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
  (Arkadaş sayılar için google)*/
  function friendNumbers(number1,number2) {
      let total1=0
      let total2=0
    for (let i = 1; i < number1; i++) {
        if (number1%i==0) {
            total1+=i;
        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2%i==0) {
            total2+=i;
        }
    }
    if(number1 ==total2 && number2==total1){
        console.log(number1+ " ve " +number2+ " arkadaş sayılardır.")
    }
    else{
        console.log(number1+ " ve " +number2+ " arkadaş sayı değildir.")

    }
}
friendNumbers(220,284);



/*3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.*/

function perfectNumber() {
    for (let i =1; i <1000; i++){
    let number=0;
        for (let j = 1; j < i; j++)
        {
            if (i%j==0) {
                number+=j;
            } 
        }
        if (i==number) {
            console.log(i+" mükemmel sayıdir.");
        }
    }
}
perfectNumber()


   
/*4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.*/
function primeNumbers() {
    for (let i = 2; i < 1000; i++) {
    let count=0;
        for (let j = 1; j <=i; j++) {
            if(i%j==0){
                count++;
            }
        }
        if (count==2) {
            console.log(i+ " asal sayıdır.");
        }
    }   
}
primeNumbers()