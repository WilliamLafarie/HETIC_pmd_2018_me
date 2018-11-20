/*
    Création d'une fonction en ES5
*/

    function sayHello( nameParam ){
        console.log(`Hello ${nameParam}`);
    }

    let sayCiao = function(nameParam){
        console.log(`Ciao ${nameParam}`);
    }

    // Appeler la fonction
    sayHello('William');

/*
    Création d'une fonction en ES6
*/

    const sayHola = (nameParam) => {
        console.log(`Hola ${nameParam}`);
    }

    const sayHolaSecond = nameParam => console.log(`Hola ${nameParam}`); // uniquement avec UN paramètre !

    // Appeler la fonction
    sayHola('William');
    sayHolaSecond('William');

