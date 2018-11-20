/*
    Déclaration des variables
*/

   let first = 0;
   let second = 2;
   let third = 10;
   let fourth = 22;
   let fifth = true;

/*
    Opérateurs de comparaison
*/

    console.log(first > second);
    console.log(first < second);
    console.log(first >= second);
    console.log(first <= second);

    console.log( fourth % third); // Reste entier d'une division
    console.log( !fifth);

    console.log( ++first );
    console.log( --second );

/*
    Les conditions IF, ELSE, IF, ELSE
*/

    let userAge = 40;
    
    if( userAge >= 18 ){
        console.log('Majeur');
    } else if( userAge >= 40 ){
        console.log('Senior');
    } else{
        console.log('Mineur');
    };  

    // Utilisation du ET logique &&
    if( userAge >= 20 && userAge <= 40 ){
         console.log('Entre 20 et 40');
    }

    // Utilisation du OU logique ||
    if ( userAge == 20 || userAge == 40){
        console.log('20 ou 40');
    }

/*
    Comparer la valeur et le type des deux variables
*/

    let firstNumber = 12;
    let secondNumber = '12'

    if( firstNumber === secondNumber){
        console.log('Vrai');
    } else{
        console.log('Faux');
    };


/*
    Condition ternaires
*/

    let myTest = false;

    myTest ? console.log('Vrai') : console.log('Faux');