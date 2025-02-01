

//let checkbox = document.querySelector('.checkbox');
let checkbox = document.getElementsByClassName('checkbox');

// TEST console.log(checkbox[2].checked);

if (checkbox[0].checked, checkbox[1].checked, checkbox[2].checked == false ) {
    alert("veuillez cocher au moin 1 case");
}
else {
    alert("formulaire envoyer");
};


// idées de solution moyennement propre mais qui marcherai :
/*
let checkbox1 = document.getElementById("mecanique"); //
let checkbox2 = document.getElementById("carrosserie");
let checkbox3 = document.getElementById("autres");

if (checkbox1.checked + checkbox2.checked + checkbox3.checked == false) {
    alert("veuillez cocher au moin 1 case");
}

else {
    alert("formulaire envoyer");
};
*/
/*================================================================================================*/

/*

https://www.youtube.com/watch?v=arjtn3uNiK4

getElementById("Formulaire") = recupere le formulaire
addEventListener("submit", function()... = ecoute evenement submit puis lance function
etElementsByTagName = recupereration grouper


e = 1er parametre que submit creera/declenchera, peut s'appeler n'importe comment (e, ou salut, ou premeiere_fonction, etc)
e.preventDefault() = empeche la fonction par defaut du formaulaire qui s'accumule dans la barre d'adresse

 if (!lastName.value) = si (if) la variable (lastName) n'a pas (!) de valeur (value) , alors ...

innerHTML = ecrit dans le html cibler

*/

//================ START RECUPERATION DU FORMULAIRE ===================//
/*
document.getElementById("Formulaire").addEventListener("submit", function(e) {

    var erreur;
    var input = document.getElementById("Formulaire").getElementsByTagName("input");
   

    for (var i = 0; i < input.length; i++) {
        if (!input[i].value ) {
            erreur = "veuillez renseigner se champ";
            break;
        }
    };


    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }

    else { 
    alert("formulaire envoyer");

    }

}) 
//================ END RECUPERATION DU FORMULAIRE ===================//
*/

//================ RECUPERATION DU FORMULAIRE ===================//

document.getElementById("Formulaire").addEventListener("submit", function(e) {
 
    var checkbox = document.getElementsByClassName('checkbox');
    var erreur;
    var input = document.getElementById("Formulaire").getElementsByTagName("input");
   
/********** optionnel car deja des required *********/
    for (var i = 0; i < input.length; i++) {
        if (!input[i].value ) {
            erreur = "veuillez renseigner tous les champs";
            break;
        }
    }


  /*  if (checkbox[0].checked + checkbox[1].checked + checkbox[2].checked == false ) {
        erreur = "veuillez cocher au moin 1 case";
    }*/

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }

/****************************************************/

else {
    alert("formulaire envoyer");
};
    
})

//================ DEFILEMENT PAGE ===================//
// https://terwanerik.github.io/ScrollTrigger/

