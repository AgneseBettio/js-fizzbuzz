// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 0; i < 100; i++) {
    var risultato = i;

    //per i multipli di 3 stampi “Fizz” al posto del numero
    if ( i % 5 === 0 && i % 3 === 0) {
        risultato = "BuzzFizz";
    }
    //per i multipli di 5 stampi Buzz
    else if ( i % 5 === 0) {
        risultato = "Buzz";
    }

    else if (i % 3 === 0) {
        risultato = "Fizz";
    }
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

    console.log(risultato);
}