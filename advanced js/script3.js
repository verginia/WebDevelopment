/*
Exercițiul 1: Creează o clasă numită Animal care să aibă următoarele proprietăți și metode:
1. Proprietăți:
-> nume (string)
-> varsta (număr)
2. Metode:
-> descrie() – să returneze un mesaj de forma: "Acest animal se numește [nume] și are [varsta] ani."
3. Creează două instanțe ale clasei Animal, de exemplu, un câine și o pisică, 
și afișează descrierea lor folosind metoda descrie().

*/

// Define the Animal class
class Animal {
    constructor(name, age) {
        this.name = name; // Initialize the "name" property
        this.age = age;  // Initialize the "age" property
    }
 // Method that describes the animal
    describe() {
        return `This animal is called ${this.name} and is ${this.age} years old.`;
    }
}

// Create 2 instances: a dog and a cat
const dog = new Animal("Lexa", 15);
const cat = new Animal("Maya", 3);

// Afișăm descrierea lor
console.log(dog.describe());
console.log(cat.describe());

/*
Exercițiul 2: Creează o clasă de bază Vehicul și o clasă derivată Masina:
1. Clasa Vehicul:
-> Proprietăți:
--> marca (string)
--> vitezaMaxima (număr)
-> Metode:
--> descriere() – să returneze: "Acesta este un vehicul marca [marca] cu o viteză maximă de [vitezaMaxima] km/h."

2. Clasa Masina (moștenește Vehicul):
-> Proprietăți suplimentare:
--> numarUsi (număr)
-> Metode:
--> Adaugă o metodă nouă numită detaliiAditionale() care să returneze: "Această mașină are [numarUsi] uși."
3. Creează o instanță a clasei Masina și afișează descrierea vehiculului și detaliile adiționale despre mașină.
 */

// Base class Vehicle
class Vehicle {
    constructor(brand, maximumSpeed) {
        this.brand = brand;
        this.maximumSpeed = maximumSpeed;
    }

    description() {
        return `This is a ${this.brand} vehicle with a maximum speed of ${this.maximumSpeed} km/h.`;
    }
}

// Derived class Car that inherits Vehicle
class Car extends Vehicle {
    constructor(brand, maximumSpeed, numberDoors) {
        super(brand, maximumSpeed); // Call the base class constructor
        this.numberDoors = numberDoors;
    }
// New method for derived class
    additionalDetails() {
        return `This car has ${this.numberDoors} doors.`;
    }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", 220, 4);

// Display the description and additional details
console.log(myCar.description());
console.log(myCar.additionalDetails());