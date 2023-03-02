// https://www.w3schools.com/jsref/jsref_obj_date.asp

// appel de fonction en boucle
let timer = setInterval(maj,1000);
function maj(){
    // instanciation d'une date
    let d = new Date();

    //Methodes qui récupèrent directement la Date et l'heure
    let date = d.toLocaleDateString();
    let time = d.toLocaleTimeString();

    // affichage dans la page html
    document.body.innerHTML = `
    <div id="horloge">
    <h1>${date}</h1>
    <h2>${time}</h2>
    </div>`;

    // Récupérer un élément HTML avec son ID dans une variable JS
    let horlogeDiv = document.getElementById("horloge");

    // Modifier le style CSS directement en JS
    horlogeDiv.style.border = "5px solid white";
    horlogeDiv.style.color = "black";
    horlogeDiv.style.background = "#d8dee9";
    horlogeDiv.style.padding = "50px";
    horlogeDiv.style.textAlign = "center";
}

/*
    // récupération des info contenues dans la date
    let year = d.getFullYear();
    let month = imposer2chiffres(d.getMonth()+1);
    let day = imposer2chiffres(d.getDate());
    let hour = d.getHours();
    let min = imposer2chiffres(d.getMinutes());
    let sec = imposer2chiffres(d.getSeconds());

    // correction affichage
    function imposer2chiffres(nb){
        if (nb<10) return "0"+nb;
        else return nb;
    }

    //affichage dans la page HTML
    document.body.innerHTML = `
        <div id="horloge">
        <h1>${day} / ${month} / ${year}</h1>
        <h2>${hour} : ${min} : ${sec}</h2>
        </div>`;
*/