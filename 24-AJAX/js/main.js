// XMLHttpRequest()

//Utilisation d'une librairie (jQuery)
// . get (url)

// appel AJAX vers serveur.php
let serveur = "https://tech-me-up.net/formation/temp/serveur.php";
$.get(serveur,{langue:"EN"},function(reponse){
    console.log(reponse);
});