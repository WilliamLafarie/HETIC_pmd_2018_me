/*
    Déclaration des variables
*/

    let myNav = document.querySelectorAll('nav a');
    console.log(myNav);
//

/*
    Activer la navigation
*/

    // Faire une bouble sur myNav (collection de liens) (ForOf)
    for(let item of myNav){
        // item => lien de la nav
        // console.log(item);

        // Capter le clic sur le lien
        item.addEventListener('click', (event) => {
            // Bloquer le comportement naturel de la balise
            event.preventDefault();

            // Récupérer la valeur de l'attribut link-data
            const pageName = item.getAttribute('link-data');

            // Ajouter le contenu dans le DOM
            fetchHtmlData(pageName)
        });
    }
//

/*
    Création d'une fonction fetch
*/

    const fetchHtmlData = (page = 'contacts') => {

        fetch(`./content/${page}.html`)
        // 1er callback: Analyse et traitement du fetch
        .then( rawReponse => {
            // console.log(rawReponse)

            // Renvoer la réponse au format texte
            return rawReponse.text()
        })
        // 2ème callback: Manipuler les données
        .then( textResponse => {
            // Ajouter le contenu dans le DOM            
            document.querySelector('main').innerHTML = textResponse

            // Envoyer le nom de la page dans le dernier then
            return page
        })

       // 3ème callback:
       .then( page => {
         console.log(page)

         // Vérifier le nom de la page active
         if( page === 'contacts' ) submitForm()
             
    })

        // Capter les erreurs
        .catch( error => {
            console.error(error)
        })

    }    
//


/*
    Gestion du formulaire
*/

    const submitForm = () => {
        let myForm = document.querySelector('form');
             
        // Capter le submit du formulaire
        myForm.addEventListener( 'submit', (event) =>{
            // Bloquer le comportement naturel de la balise
            event.preventDefault();
            
            // Validation du formulaire
            let msgSubjet = document.querySelector('[placeholder = "Sujet"]');
            let msgEmail = document.querySelector('[placeholder = "Email"]');
            let msgMessage = document.querySelector('[placeholder = "Votre message"]');

            // Initier une variable pour la gestion des erreurs
            let formError = 0;

            // Le sujet est valide s'il contient au minimum 2 caractères
            if( msgSubjet.value.length < 2){
                formError ++;
            }

            // Le mail est valide s'il contient au minimum 5 caractères
            if( msgEmail.value.length < 5){
                formError ++;
            }

            // Le message est valide s'il contient au minimum 5 caractères
            if( msgMessage.value.length < 5){
                formError ++;
            }

            // Validation finale du formulaire
            if( formError === 0 ){
                console.log('Le formulaire est validé !');

                // Envoyer les donées...
                // Vider le formulaire
            }
            
         })
    };

/*
    Charger le contenu de la page d'accueil
*/

    fetchHtmlData()


