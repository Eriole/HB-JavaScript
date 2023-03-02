// https://www.w3schools.com/jsref/jsref_obj_date.asp

function maj(){
    let clear = document.querySelectorAll(".bloc")
    clear.forEach(function(classBloc,i){
        classBloc.innerHTML="";
        classBloc.classList.remove("on");
    });
    
    // instanciation d'une date
    let d = new Date();

    //Methodes qui récupèrent directement la Date et l'heure
    let hour = d.getHours();
    let min = d.getMinutes();

    // affichage dans la page html
    let hourShown = document.getElementById(`h${hour}`);
    hourShown.innerHTML = `${hour}`
    hourShown.classList.add("on");

    let minShown = document.getElementById(`m${min}`);
    minShown.innerHTML = `${min}`
    minShown.classList.add("on");
}

maj();
let timer = setInterval(maj,10000);