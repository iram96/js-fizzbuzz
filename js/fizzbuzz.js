/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

console.log("JS ok");

const inPageElement = document.getElementById('listNumb');
let numberedList = '';

for (let i = 1; i <= 100; i++){
    if (i % 15 === 0){
        numberedList += 'FizzBuzz ';
        // console.log(numberedList);
    } else if (i % 5 === 0){
        numberedList += 'Buzz ';
        // console.log(numberedList);
    } else if (i % 3 === 0){
        numberedList += 'Fizz ';
        // console.log(numberedList);
    } else {
        numberedList += `${i} `;
        // console.log(numberedList);  

        }
}

console.log(numberedList);
inPageElement.innerHTML = numberedList;
