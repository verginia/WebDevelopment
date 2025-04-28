console.log("Using the Terminal for JS Advanced.")

/*
Exercițiul 1: var, let & const

1. Declara 3 variabile cu keywordurile var, let și const numite nume, prenume și varsta cu valorile aferente.
2. Schimbǎ valorile variabilelor și observă ce se întâmplă dacă încerci să schimbi variabila declaratǎ cu keywordul const.
*/
console.log("Exercițiul 1: var, let & const: ");
var name = "Stolear";
let firstName = "Verginia";
const age = 36;

console.log(name, firstName, age);
name = "Saptefrati";
firstName = "Ecaterina";
//age = 64; // const value can't be changed.
console.log(name, firstName, age);
/*
Exercițiul 2: Scope Global

1. Declară o variabilă globală numită nume și atribuie-i valoarea "Andrei".
2. Creează o funcție numită afiseazaNume care afișează valoarea variabilei nume în consolă.
3. Apelează funcția.

Exemplu de cod de început:

// Declară variabila globală
let nume = "Andrei";

// Creează funcția
function afiseazaNume() {
  // Afișează valoarea variabilei globale
}

// Apelează funcția
*/
console.log("Exercițiul 2: Scope Global: ");
let name1 = "Andrei";
function displayName(){
    console.log(name1);
}
displayName();

/*
Exercițiul 3: Scope Local

1. Creează o funcție numită adaugaNumere care are două variabile locale, x și y, cu valorile 5 și 10.
2. Calculează suma lor și afișeaz-o în consolă.
3. Observă ce se întâmplă dacă încerci să accesezi variabilele x și y în afara funcției.

Exemplu de cod de început:

function adaugaNumere() {
  let x = 5;
  let y = 10;
  // Calculează suma lui x și y și afișeaz-o
}

adaugaNumere();

// Încearcă să afișezi variabilele x și y aici (ce se întâmplă?)
*/
console.log("Exercițiul 3: Scope Local: ");
function addNumbers(){
    let x = 5;
    let y = 10;
    let sum = x + y;

    console.log("Amount: ", sum);
}
addNumbers();
// console.log(x); // x is not defined
// console.log(y); // x is not defined
/*
Exercițiul 4: Block Scope

1. Creează o funcție numită testeazaBlockScope.
2. În interiorul funcției, creează un bloc if (folosind if (true)) și declară o variabilă z folosind let, cu valoarea 15.
3. Afișează valoarea lui z în interiorul blocului if.
4. Încearcă să afișezi valoarea lui z în afara blocului if (în consolă). Observă ce se întâmplă.

Exemplu de cod de început:

function testeazaBlockScope() {
  if (true) {
    let z = 15;
    // Afișează valoarea lui z aici
  }
  // Încearcă să afișezi valoarea lui z aici
}

testeazaBlockScope();
*/
console.log("Exercițiul 4: Block Scope: ");
function testBlockScope(){
    if(true){
        let z = 15;
        console.log("If statement:", z);
    }
    console.log("After if:", z); // z is not defined.
}
testBlockScope();