console.log('ciao')
/*
Consegna:
Oggi lavorerete a forse uno dei programmi piú noti nel ns settore, FizzBuzz!
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

/**
 -loop, for
 - console.log
 -%
 -if/else
 -forse math ? leggo doc
 */

 //seleziono la mia lista e la racchiudo in una costante
 const ul = document.querySelector('ul.fizzbuzz');
 console.log(ul); //loggo per vedere che sia stato selezionato e inizializzato correttamente

 //creo un ciclo di numeri fino a 100
 for (let i=1; i<101; i++){
     //inserisco in una costante cio che voglio che il ciclo mi stampi in pagina(lascio style a i quadrati x visualizzarli meglio,poi togli)
     const square = `<li style="border: 2px solid white;padding:25px;" class= "box mb-3 me-3 d-flex justify-content-center box--${i}">${i}</li>`;
     //se funziona,
     console.log(square);
     //aggiungo quegli elementi in pagina dentro la row
     ul.innerHTML += square;

/*if(multiplo di 3){
//stampi “Fizz” al posto del numero
}else if(multiplo di 5){
//5 stampi “Buzz”.
}else if (multiplo di 3 e 5){
    stampi “FizzBuzz”
}
*/
if (i % 3 == 0 && i % 5 == 0){
    //console.log("fizzBuzz"); funziona
    const squareFizzBuzz = `<li style="border: 2px solid white;padding:25px;"  class= "box mb-3 me-3 d-flex justify-content-center">"FizzBuzz"</li>`;
    ul.innerHTML += squareFizzBuzz;

} else if (i % 3 == 0) {
    console.log("fizz");
} else if (i % 5 == 0){
    console.log("buzz");
}
     
 }
 