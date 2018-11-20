/*
    Déclaration des variables
*/

    let userCollection = [];
    let myButton = document.querySelector('button');
    let buttonSayHello = document.querySelector('button:last-child')
    let currentYear = 2018;


    // Définir le model objet (constructor) /!\ Ce n'est pas une classe juste un objet ! 

    function User( paramFirstName, paramLastName, paramBirthDate){
        this.firstName = paramFirstName;
        this.lastName = paramLastName;
        this.birthDate = paramBirthDate;
    };

    // Ajouter une fonction au constructeur
    User.prototype.sayHello = function() {
        console.log (`Salut, je suis ${this.firstName} ${this.lastName}`);
    }

    // Ajouter 3 users dans la collection

    userCollection.push(new User('Sebastien', 'Cosneau', 2002));
    userCollection.push(new User('Antoine', 'LeKing', 1993));
    userCollection.push(new User('William', 'Lafarie', 1998));
    console.log(userCollection);

/*
    Capter le click sur le bouton
*/

    myButton.addEventListener('click', function(){
        
        //Demander le prénom de l'utilisateur
        let askFirstName = prompt('Votre prénom');
        let askLastName = prompt('Votre nom');
        let askBirthDate = prompt('Votre date de naissance');

        // Ajouter un objet dans le tableau
        userCollection.push( new User(askFirstName, askLastName, parseInt(askBirthDate)));
        console.log(userCollection);
    });

/*
    - Ajouter un bouton dans le DOM
    - Capter le click sur ce bouton
    - Au click, faire une boucle pour saluer les utilisateurs
*/
    buttonSayHello.addEventListener('click',function(){
        for(let i = 0; i<userCollection.length; i++){
            userCollection[i].sayHello();

            // Savoir si l'utilisateur est majeur ou pas
            let userAge = currentYear - userCollection[i].birthDate;
            console.log(userAge);

            if( userAge >= 18 ){
                console.log('Majeur');

            } else{
                console.log('Tu es mineur... casse toi de là');
            }
        }
    });