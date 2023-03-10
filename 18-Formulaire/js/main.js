//let nom = document.querySelector('input[name="nom"]');
//console.log(nom.value);


//vérifie notre formulaire et bloque l'envoi si une erreur est détectée
function verif(form){
    let affichageErreurs = document.querySelector("form .affichageErreurs");
    //On efface les erreurs précédentes
    affichageErreurs.innerHTML+="";
    //Tableau qui répertorie les erreurs
    let erreurs = [];
    //Test 1 - Nom vide?
    if (form.nom.value == "") erreurs.push("Merci de renseigner le nom.");
    //Test 2 - Mail vide?
    if (form.email.value == "") erreurs.push("Merci de renseigner l'email.");
    //Test 3 - Mail valide?
    else if (isEmail(form.email.value)==false) erreurs.push("Adresse e-mail non valide.");
    //Test 4 - Message <10 caractères
    if (form.msg.value.length>10) erreurs.push("Message trop long (10 caractères max)");

    //Si des erreurs ont été détectées...
    if (erreurs.length>0){
        erreurs.forEach(function(erreur){
            //Parcour le tableau et affiche les erreurs
            affichageErreurs.innerHTML+=`<p>${erreur}</p>`
        })
        return false; //bloque l'envoi des données
    }else{
        return true; //laisse passer les données
    }
};

function isEmail(mail){
    let re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; //new RegExp("toto");
    return re.test(mail);
}
let info = document.querySelector("form .info");
function compteur(champ){
    let reste = 10-champ.value.length;
    info.innerHTML=`${reste} caractères restants`;
}