/*
    Afficher un message dans la console
*/

    console.log('Hello Javascript');
    console.error('Bad value...');

/*
    Création de variables
*/

    var userName = 'William Balde'; // Version ES5
    
    // Version ES6
    let firstName = 'William'; // Version ES6
    const birthDate = 1998; // Nouveauté ES6


/*
    Les types de variables primitive
*/

    let isBoolean = true; // true || false (1 || 0)
    let isString = "Du texte"
    let isInteger = 1234567890;
    let isFloat = 123.1289;
    let isArray = ['Hello', 123];

    console.log( isBoolean, isString, isInteger, isFloat, isArray);


/*
    Intégrer une balise HTML dans une variable
*/

    let myTitle = document.querySelector('h1');


/*
    Templating de string
*/

    let firstCar = 'Volvo';
    let secondCar = "Nissan";

    // Concat. version ES5
    let message = "J'ai deux voitures, une " + firstCar + " et une " + secondCar; // ES5

    // Concat. version ES6
    let newMessage = `J'ai deux voitures, une ${firstCar} et une ${secondCar}`

    console.log(message, newMessage);


/*
    Déclarer un objet
*/

    let myObject = {
        firstName: 'William',
        lastName: 'Lafarie',
        birthDate: 1998,

        sayHello: () => {
            console.log(`Hello, my name is ${myObject.firstName}`);
        }
    };

    console.log(myObject);

    myObject.sayHello();
