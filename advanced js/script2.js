/*
Exercițiul 1: Funcție pentru dublarea unui număr
Task-uri:
1. Scrie o funcție folosind Function Declaration numită dubleaza care:
-> Primește un număr ca parametru.
-> Returnează dublul acelui număr.
-> Apelează funcția și afișează rezultatul în consolă.
*/
console.log("1.Funcție pentru dublarea unui număr:");
function duplicate(number){
    return number * 2;
};

const result = duplicate(9);
console.log(result);

// arrow function:
const duplicate1 = (number) => {
    return number * 2;
};
const result1 = duplicate1(6);
console.log(result1);
/*
Exercițiul 2: Funcție pentru verificarea unei vârste
Task-uri:
1. Scrie o funcție folosind Function Expression numită esteMajor care:
-> Primește o vârstă ca parametru.
-> Returnează true dacă vârsta este cel puțin 18 și false altfel.
-> Apelează funcția cu mai multe exemple și afișează rezultatele.
*/
console.log("Exercițiul 2: Funcție pentru verificarea unei vârste:");
// Function Expression: 
const isMajor = function(age) {
    return age >= 18;
};
console.log("Age: 18", isMajor(18));
console.log("Age: 17", isMajor(17));
console.log("Age: 19", isMajor(19));
console.log("Age: 36", isMajor(36));
/*
Exercițiul 3: Funcție pentru verificarea numerelor pare
1. Scrie o funcție folosind Arrow function numită estePar care:
-> Primește un număr ca parametru.
-> Returnează true dacă numărul este par și false dacă este impar.

Task-uri:
-> Apelează funcția cu câteva numere diferite.
-> Afișează rezultatele în consolă.
*/
console.log("Exercițiul 3: Funcție pentru verificarea numerelor pare:");
// Arrow function:
const isEven = (number) => number % 2 === 0;

console.log("Number: 5: ", isEven(5));
console.log("Number: 6: ", isEven(6));
console.log("Number: 8: ", isEven(8));
console.log("Number: 15: ", isEven(15));
console.log("Number: 16: ", isEven(16));
/*
Exercițiul 4: Obiecte simple cu Function Constructor
Task-uri:
1. Creează un constructor de funcție numit Masina care să aibă următoarele proprietăți:
-> marca (string)
-> model (string)
-> an (number)

-> Adaugă o metodă numită afiseazaDetalii care afișează marca, modelul și anul în consolă.
-> Creează două obiecte folosind constructorul Masina și apelează metoda afiseazaDetalii pentru fiecare.
 */
console.log("Exercițiul 4: Obiecte simple cu Function Constructor:");
// Function Constructor:
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.showDetails = function(){
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    };
}

const car1 = new Car("Hunday", "Creta", 2019);
const car2 = new Car("BMW", "X7", 2024);

// call the method:
car1.showDetails();
car2.showDetails();