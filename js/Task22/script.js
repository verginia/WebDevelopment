// Task 1: Creează un fișier HTML și un fișier JS extern. 
// Leagă fișierul JS de HTML și folosește console.log("Salut, lume!") pentru a verifica dacă legătura funcționează.
console.log("Task 1: console.log")
console.log("Hello World!")
console.log("Introduction in JavaScript!")

/*Task 2: Declară o constantă numită nume și atribuie-i numele tău. 
 Declară o variabilă let numită vârstă si atribuiei valoarea 30.
 Schimbă valoarea variabilei vârstă cu vârsta ta și afișează valoarea în consolă.
*/

console.log("Task 2: Variables let and const");
const name = "Stolear";
let age = 30;

console.log(name);
console.log(age);
age = 36;
console.log(age);

/* Task 3:
1. Creează 2 variabile numite a și b cu valoarea 10 și 5. 
Calculează suma(+), diferența(-), produsul(*) și câtul(/). Afișează-le în consolă.
2. Creează 2 variabile numite val1 și val2 cu valoarea 13 și 5. Calculează restul împărțirii dintre cele două numere.
*/

console.log("Task 3: Operators");
// Operatii aritmetice:
let a = 10;
let b = 5;

console.log("Addition (Suma): ", a + b);
console.log("Subtraction (Diferenta): ", a - b);
console.log("Multiplication (Produsul): ", a * b);
console.log("Division (Catul): ", a / b);

// Restul impartirii
let val1 = 13;
let val2 = 5;

console.log("Modulus (Restul impartirii): ", val1 % val2);

/*Task 4:
1. Creează 5 variabile, fiecare cu un tip de date diferit: string, number, boolean, undefined, null. Afișează-le în consolă.
2. Creează un array numit fructe care conține 5 elemente de tip string. Afișează primul și ultimul element din array în consolă.
3. Creează un obiect numit persoana cu proprietăți nume, prenume, varsta, job, oras. 
Afișează numele persoanei folosind punctul (.) și notația cu paranteze pătrate ([]).
*/

console.log("Task 4: Data Types");
let name1 = "Verginia";
console.log("Data type: 1.String: ", name1);
console.log("typeof name1:",typeof name1);

let number = 30;
console.log("Data type: 2.Number: ", number);
console.log("typeof number:",typeof number);

let testa = true;
let testf = false;
console.log("Data type: 3.Boolean: ", testa);
console.log("typeof testa:",typeof testa);
console.log("Data type: 3.Boolean: ", testf);
console.log("typeof testf:",typeof testf);

let check;
console.log("Data type: 4.Undefined: ", check);
console.log("typeof check:",typeof check);

let empty = null;
console.log("Data type: 5.Null: ", empty);
console.log("typeof empty:",typeof empty);

// 2. Creează un array numit fructe care conține 5 elemente de tip string. Afișează primul și ultimul element din array în consolă.
let fruits = ["apple", "peach", "mango", "strawberry", "grapes"];
console.log("Array first element: ", fruits[0]);
console.log("typeof fruits:",typeof fruits);
console.log("Array last element: ", fruits[4]);

// 3. Creează un obiect numit persoana cu proprietăți nume, prenume, varsta, job, oras. 
// Afișează numele persoanei folosind punctul (.) și notația cu paranteze pătrate ([]).

let person = {
    "lastName": "Stolear",
    "firstName": "Verginia",
    "age": 36,
    "job": "QA Engineer",
    "city": "Chisinau"
};

console.log("Object, dot syntax: ", person.lastName);
console.log("Object, square bracket syntax: ", person["lastName"]);
console.log("typeof person:",typeof person);

/* Task 5:
1. Compară numerele 5 și "5" pentru a vedea dacă sunt egale folosind egalitate și egalitate strictă (== și ===).
 Afișează rezultatele.
2. Creează 2 variabile numite num1 și num2 cu valoarea 10 și 5. Compară cele două numere 
(mai mare, mai mic, mai mare sau egal) și afișează rezultatele.
3. Compară două string-uri pentru egalitate și inegalitate.
 */

console.log("Task 5: Comparison Operators:");

let x = 5;
let y = "5";
console.log("5 == '5'", x == y);
console.log('5 === "5"', x === y);

let num1 = 10;
let num2 = 5;
console.log("10 > 5", num1 > num2);
console.log("10 < 5", num1 < num2);
console.log("10 >= 5", num1 >= num2);
console.log("10 <= 5", num1 <= num2);

let ad = "abcde";
let ac = "abcdf";

console.log('"abcde"== "abcdf"', ad == ac);
console.log('"abcde" != "abcdf"', ad != ac);
console.log('"abcde" === "abcdf"', ad === ac);
console.log('"abcde" !== "abcdf"', ad !== ac);

/* Task 6:
1. Verifică dacă un utilizator este eligibil pentru un credit:

a. Variabila varsta trebuie să fie mai mare de 18.
b. Variabila areVenit trebuie să fie true.
c. Folosește operatorul logic && pentru a decide dacă utilizatorul este eligibil.

2. Scrie un program care afișează ziua săptămânii pe baza unui număr 
(1 pentru Luni, 2 pentru Marți,  3 pentru Miercuri, 4 pentru joi, etc.) folosind un switch.
*/

console.log("Task 6: Conditional:");
console.log("First: If Else");
let age1 = 19;
let hasIncome = true;

if (age1 > 18 && hasIncome){
    console.log("The user is eligible");
}else{
    console.log("The user is not eligible");
}

console.log("Second: Switch");
let numberDay = 1;

switch(numberDay){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number! Please enter a number between 1 and 7.");
}

/* Task 7:
1. Scrie un program care afișează toate numerele de la 1 la 10 folosind o buclă for.
2. Scrie un program care afișează toate numerele de la 1 la 10 folosind o buclă while.
 */

console.log("Task 7: Loop:");
console.log("First: For");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("First: While");
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}