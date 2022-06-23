// 1. creo il ciclo per stampare in console i numeri da 1 a 100
for (let i = 1; i<=100; i++){

// 2. controllo se la variabile i sia multiplo sia di 3 che di 5
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");

// 3. controllo se la variabile i è multiplo di 3
    } else if(i % 3 == 0){
        console.log('Fizz');

// 4. controllo se la varibiale i è multiplo di 5
    } else if( i % 5 == 0){
        console.log('Buzz');

// 5. se i controlli precedenti sono falsi stampo i
    } else {
        console.log(i);
    }
}
