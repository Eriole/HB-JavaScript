console.log(window);

// onresize : redimensionnement de la fenêtre
window.onresize=colorBackground;

// onload : au chargement de la fenêtre
window.onload=colorBackground;

// fonction de changement de couleur qui s'applique
function colorBackground(){
    let page = document.body
    if (innerWidth>1000) {
        page.style.background = "lime"
    } else if (innerWidth>500) {
        page.style.background = "blue"
    } else {
        page.style.background = "red"
    }
};