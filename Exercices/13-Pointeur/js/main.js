//on initialise le compteur
let i = 10;

//On récupère le conteneur
let conteneur = document.querySelector("#conteneur");
let cursor = document.querySelector("#curseur");

// onmousemove : souris qui bouge
window.onmousemove = function(e){
    cursor.style.top=e.clientY+"px";
    cursor.style.left=e.clientX+"px";
    i = 10;
}

//Affiche et décrémente le compteur
function maj(){
    conteneur.innerHTML = `<span style="font-size:50vw" >${i}</span>`;
    if(i==0) window.location.href="https://google.fr";
    i--;
}

//setInterval(maj,1000)