/*
    Déclarer un tableau contenant 4 prénoms
*/

    let userCollection = ['Sebastien', 'Antoine', 'Adrien', 'Raphael'];

/*
    Saluer chaque item du tableau
*/

    let i = 0;
    let n = userCollection.length;
    
    // Créer une boucle WHILE sur une collection de données
    while(i<n){
        //console.log(`Salut ${userCollection[i]}`);
        i++;
    };

    // Créer une boucle FOR sur une collection de données
    for(i ; i<n ; i++){
        //console.log(`Salut ${userCollection[i]}`);
    };

     // Créer une boucle FOR OF sur une collection de données
     for(let item of userCollection){
        //console.log(`Hello ${item}`);
    };

    // Créer une boucle FOR OF sur une collection de données
    userCollection.forEach(item => {
        //console.log(`Hello ${item}`);
    });


/*
    Déclarer un objet user contenant firstName et lastName
*/

    let user = {
        firstName: 'William',
        lastName: 'Lafarie',
    };

    // Faire une boucle FOR IN sur les propriétés de l'objet
    for( let property in user ){
        console.log(property);
        console.log(user[property]);
    };


