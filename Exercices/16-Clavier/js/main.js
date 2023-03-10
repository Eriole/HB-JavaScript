// onkeydowm / onkeyup (plus souvent utilisé) / onkeypressed
window.onkeyup=function(e){
    //console.log(e);
    //Réaction à l'appui sur la touche espace
    if (e.key==" "){
        //génération d'une couleur aléatoire
        document.body.style.background=getRandomColor();
    }
};

//Fonction qui retourne une couleur aléatoire en rgb
function getRandomColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let alpha = Number(Math.random().toFixed(2))+0.1;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}