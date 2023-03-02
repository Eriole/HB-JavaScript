let timer = setInterval(maj,1000);
// ECRIRE 5
let delay = 5;
function maj(){
    document.body.innerHTML = `<div>${delay}</div>`
    // DECRÉMENTER LE 5
    delay-- ;
    // PASSAGE A 0
    if(delay<0) window.location.href = "https://google.fr"; // REDIRECTION
}

//window : plus grand sélecteur possible -par défaut
//window.location.href : localisation ou url
//document : le document HTML
//body :  la balise <body> du document HTML
