// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1. creo il ciclo per stampare in console i numeri da 1 a 100.

const container = document.getElementById('container');

for (let i = 1; i<=100; i++){
    const newEl = document.createElement('div')
    if(i % 3 == 0 && i % 5 == 0){
        newEl.innerText = 'FizzBuzz'
        console.log("FizzBuzz");

    } else if(i % 3 == 0){
        newEl.innerText = 'Fizz'
        console.log('Fizz');

    } else if( i % 5 == 0){
        newEl.innerText = 'Buzz'
        console.log('Buzz');

    } else {
        newEl.innerText = i 
        console.log(i);
    }
    container.append(newEl)
}
