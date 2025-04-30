/*
1. Lucrul cu obiecte

1. Creează un obiect care reprezintă o mașină și include următoarele proprietăți:

-> marca (string)
-> modelul (string)
-> anul (number)
-> rulează (boolean)

Task-uri:
1. Afișează toate proprietățile obiectului folosind console.log.
2. Adaugă o proprietate nouă, culoare, și seteaz-o la orice culoare preferi.
3. Schimbă valoarea proprietății rulează în true.
4. Șterge proprietatea anul.
5. Afișează obiectul final în consolă.
*/
console.log("1. Lucrul cu obiecte: Task1: Car:");
let car = {
    "mark": "BMW",
    "model": "X7",
    "year": 2025,
    "isRunning": false
};

console.log(car);
car.color = "black";
console.log(car);
car.isRunning = true;
console.log(car);
delete car.year;
console.log(car);
/*
2. Creează un obiect care reprezintă un cont bancar și include următoarele:

proprietăți:
-> nume: numele titularului (string)
-> sold: suma curentă în cont (number)

metode:
-> depune(suma): adaugă suma la sold.
-> retrage(suma): Scade o sumă din sold, dar doar dacă sunt suficienți bani în cont. 
   Dacă nu sunt suficienți bani, afișează un mesaj de eroare.
-> afisareSold(): afișează soldul curent în consolă.

Task-uri:
1. Creează obiectul cont bancar și initializează-l cu valori inițiale(de exemplu, nume: "Ana Popescu", sold: 500).
2. Adaugă bani în cont folosind metoda depune.
3. Apelează metoda retrage cu o sumă mai mare decât soldul curent și observă ce se întâmplă.
4. Folosește metoda afisareSold pentru a vedea soldul actual.
*/
console.log("1. Lucrul cu obiecte: Task2: Bank Account :");

let bankAccount = {
holdersName: "Ana Popescu",
balance: 500,

handIn: function(amount){
    this.balance += amount;
    console.log(`The amount deposited ${amount} lei. Actual balance: ${this.balance} lei.`);
},
withdraw: function(amount){
    if(amount <= this.balance){
        this.balance -= amount;
        console.log(`Withdrew ${amount} lei. Actual balance: ${this.balance} lei.`);
    }else{
        console.log("Error: Insufficient funds!");
    }
},
displayBalance: function(){
    console.log(`The current balance is: ${this.balance} lei.`);
}
};

bankAccount.handIn(689);
bankAccount.withdraw(1200);
bankAccount.displayBalance();

/*
2. Lucrul cu Array

1. Ai un array cu prețurile unor produse. Scrie un cod care:
const preturi = [100, 200, 300, 400];
-> Adaugă TVA (19%) la fiecare preț folosind map. Calculul se face: preturi * 0.19.
-> Afișează un array nou cu prețurile finale.
*/
console.log("2. Lucrul cu Array: Task1: Price :");
const prices = [100, 200, 300, 400];
const pricesWithTVA = prices.map(price => price + (price * 0.19));
console.log(prices);
console.log(pricesWithTVA);
/*
2. Ai un array cu vârstele unor persoane. Scrie un cod care:
const varste = [15, 22, 27, 17, 19, 13, 30];
-> Selectează doar persoanele care sunt majore (vârsta >= 18) folosind filter.
-> Afișează array-ul rezultat.
*/
console.log("2. Lucrul cu Array: Task2: Age :");
const ages = [15, 22, 27, 17, 19, 13, 30];
const adults = ages.filter(age => age >= 18);
console.log(ages);
console.log(adults);
/*
3. Ai un array cu scorurile obținute de un jucător la diferite niveluri ale unui joc. Scrie un cod care:
const scoruri = [10, 20, 15, 25, 30];
-> Calculează scorul total folosind reduce.
-> Afișează rezultatul.
*/
console.log("2. Lucrul cu Array: Task3: Scores :");
const scores = [10, 20, 15, 25, 30];
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(scores);
console.log(totalScore);
/*
4. Ai un array cu temperaturile zilnice dintr-o săptămână. Scrie un cod care:
const temperaturi = [25, 28, 29, 31, 26, 27];
-> Verifică dacă există cel puțin o zi cu temperatura peste 30°C folosind some.
-> Afișează rezultatul (adevărat sau fals).
*/
console.log("2. Lucrul cu Array: Task4: Temps :");
const temps = [25, 28, 29, 31, 26, 27];
const highTemps = temps.some(temp => temp > 30);
console.log(temps);
console.log(highTemps);
/*
5. Ai un array cu obiecte care reprezintă utilizatori. Fiecare obiect are proprietățile nume și varsta. Scrie un cod care:
const utilizatori = [ 
{ nume: "Andrei", varsta: 22 }, 
{ nume: "Maria", varsta: 30 }, 
{ nume: "Ioan", varsta: 18 } 
];
-> Găsește primul utilizator care are vârsta mai mare de 25 folosind find.
-> Afișează utilizatorul găsit.
*/
console.log("2. Lucrul cu Array: Task5: Users :");
const users = [ 
    { nume: "Andrei", age: 22 }, 
    { nume: "Maria", age: 30 }, 
    { nume: "Ioan", age: 18 } 
];
const firstUser = users.find(user => user.age > 25);
console.log(users);
console.log(firstUser);
/*
3. Lucrul cu Destructuring & Spread Operator
1. Destructurarea unui obiect

Task-uri:
-> Ai un obiect masina cu proprietățile marca, model, și an.
-> Folosește destructuring pentru a extrage valorile proprietăților în variabile separate.
-> Afișează variabilele în consolă.
*/
console.log("3. Lucrul cu Destructuring & Spread Operator: Task1: Destructuring an object :");
const car1 = {
    brand: "Ford",
    model: "Mustang",
    year: 2025
};
// destruction
const {brand, model, year} = car1;
console.log(brand);
console.log(model);
console.log(year);

/*
2. Destructurarea unui array

Task-uri:
-> Ai un array de culori: ["roșu", "verde", "albastru"].
-> Folosește destructuring pentru a extrage prima și a doua culoare în variabile numite culoare1 și culoare2.
-> Afișează valorile acestor variabile în consolă.
*/
console.log("3. Lucrul cu Destructuring & Spread Operator: Task2: Destructuring an array :");
const colors = ["red", "green", "blue"];
// destruction
const [color1, color2] = colors;

console.log(color1);
console.log(color2);
/*
3. Utilizarea Spread Operator pentru combinarea array-urilor

Task-uri:
-> Ai două array-uri de numere: numere1 = [1, 2, 3] și numere2 = [4, 5, 6].
-> Creează un array nou numit numereCombinat care să conțină toate valorile din cele două array-uri folosind spread operator.
-> Afișează noul array în consolă.
*/
console.log("3. Lucrul cu Destructuring & Spread Operator: Task3: Spread Operator for array :");
const number1 = [1, 2, 3];
const number2 = [4, 5, 6];

const numbersCombined = [...number1, ...number2];
console.log(numbersCombined);