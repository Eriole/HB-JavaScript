//Affichage des réponses
let reponses = ["N'y compte pas",
    "Oui",
    "Non",
    "Peut-être",
    "C'est ton destin",
    "Une chance sur deux",
    "Repose ta question",
    "Pas d'avis",
]; //"length-1 valeurs"

//Selection des balises à modifier
let ball = document.querySelector("#ball");
let question = document.querySelector("[name=question]");
let info = document.querySelector(".info");
let reponse = document.querySelector(".reponse");
let screen = 1;

//Evènements
window.onkeyup=function(e){
    //Réaction à l'appui sur la touche Entrée
    if (e.key=="Enter" && screen==1){
        question.style.display="none";
        reponse.style.display="block";
        reponse.innerHTML=afficherReponse();
        info.innerHTML=`Appuyez sur "Espace" pour recommencer.`;
        ball.className= "animate__animated animate__shakeX";
        screen=2;
    }
    //Réaction à l'appui sur la touche Espace
    if (e.key==" " && screen==2){
        screen=1;
        question.style.display="block";
        reponse.style.display="none";
        info.innerHTML=`puis appuyez sur "Entrer".`;
        ball.className= "";
       //location.reload(); //refresh la page et retourne donc a l'état initial
    }
};


function afficherReponse(){
    let selection = Math.round(Math.random()*(reponses.length-1));
    return `${reponses[selection]}`;
}