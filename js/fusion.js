
/*==================================== SCROLL EFFECT ==================================== */

const service_entretien = document.querySelector('.service_entretien')
const service_occasion = document.querySelector('.service_occasion')

/*TEST dans console :
console.log(service_entretien, service_occasion, hr); */

window.addEventListener('scroll', () => {
//création constante a partir de l'objet document.documentElement
 const {scrollTop, clientHeight } = document.documentElement; 

/*TEST position dans la console :
console.log(scrollTop, clientHeight);*/

//création constante de mon Top element JUSQU'AU top de la partie VISIBLE de la fenetre
 const top_element_to_top_entretien = service_entretien.getBoundingClientRect().top;
 const top_element_to_top_occasion = service_occasion.getBoundingClientRect().top;

/*TEST position dans la console
console.log(service_entretien.getBoundingClientRect());
console.log(service_occasion.getBoundingClientRect());*/

//si scrool du haut du document est superieur au haut du document + top de la partie visible. tofixed enleve les chiffres apres la virgule 
 if(scrollTop > (scrollTop + (top_element_to_top_entretien && top_element_to_top_occasion)).toFixed() - clientHeight * 0.80) {
     service_entretien.classList.add('active_left')
     service_occasion.classList.add('active_right')
 }
})

/*==================================== SCROLL EFFECT HR ==================================== */


const hr = document.querySelector('.hr_slow')


/*TEST dans console : 
console.log(hr);*/

window.addEventListener('scroll', function () {
//création constante a partir de l'objet document.documentElement
 const {scrollTop, clientHeight } = document.documentElement; 

/*TEST position dans la console :
console.log(scrollTop, clientHeight);*/

//création constante de mon Top element JUSQU'AU top de la partie VISIBLE de la fenetre
 const hr_effect = hr.getBoundingClientRect().top;

/*TEST position dans la console
console.log(hr.getBoundingClientRect());*/

//si scrool du haut du document est superieur au haut du document + top de la partie visible. tofixed enleve les chiffres apres la virgule 
if(scrollTop > (scrollTop + hr_effect).toFixed() - clientHeight * 0.90) {
     hr.classList.add('active_hr')
 }
})

/*==================================== VERIFICATION FORMULAIRE ==================================== */

document.getElementById("Formulaire").addEventListener("submit", function(e) {
 
    var checkbox = document.getElementsByClassName('checkbox');
    var input = document.getElementById("Formulaire").getElementsByTagName("input");
    var erreur;
   
/********************** OPTIONNEL CAR DEJA REQUIRED HTML ************************************/ 
/**/                                                                                      /**/ 
/**/    for (var i = 0; i < input.length; i++) {                                          /**/ 
/**/         if (!input[i].value ) {                                                      /**/ 
/**/             erreur = "veuillez renseigner tous les champs";                          /**/ 
/**/             break;                                                                   /**/ 
/**/         }                                                                            /**/ 
/**/     }                                                                                /**/ 
/**/                                                                                      /**/ 
/********************************************************************************************/

     if (checkbox[0].checked + checkbox[1].checked + checkbox[2].checked == false ) {  
         erreur = "veuillez cocher au moin 1 case";                                    
     }                                                                                 
                                                                                       
     if (erreur) {                                                                     
         e.preventDefault();                                                           
         document.getElementById("erreur").innerHTML = erreur;                         
         return false;                                                                 
     }  
    else {
        alert("formulaire envoyer");
    };
    
})