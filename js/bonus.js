// 1. creo la costante container prendendo l'elemento con id container per stampare in pagina
const container = document.getElementById('container');
const row = document.createElement('div')
row.className = 'row'
container.append(row)
// 2. creo il ciclo per stampare in console i numeri da 1 a 100 e per creare gli elementi da aggiungere al container.
for (let i = 1; i<=100; i++){
//  3. creo una nuovo elemento su JS
    const newEl = document.createElement('div')

//* aggiungo la classe flex al nuovo elemento creato
    newEl.className = 'col'
// 4. controllo se la variabile i sia multiplo sia di 3 che di 5
    if(i % 3 == 0 && i % 5 == 0){

// 5. valorizzo il nuovo elemento precedentemente dichiaro
        newEl.innerText = 'FizzBuzz'
// 6. controllo se la variabile i è multiplo di 3
    } else if(i % 3 == 0){
// 7. valorizzo il nuovo elemento precedentemente dichiaro
        newEl.innerText = 'Fizz'
// 8. controllo se la varibiale i è multiplo di 5
    } else if( i % 5 == 0){

// 9. valorizzo il nuovo elemento precedentemente dichiaro
        newEl.innerText = 'Buzz'
// 10. se i controlli precedenti sono falsi valorizzo il nuovo elemento con la variabile i
    } else {
        newEl.innerText = i 
    }
// 11.aggiungo il nuovo elemento al container
    row.append(newEl)
}
