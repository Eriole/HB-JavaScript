let img = document.getElementById("poppy");
let coordX = 0;
let coordY = 0;
let rotation = 0;
let echelle = 1;
let borderX = window.innerWidth;
let borderY = window.innerHeight;

document.onkeyup=function(e){
    // console.log(e);
    if (e.key=="ArrowRight" && coordX<(borderX-200)){
        coordX+=50;
        rotation=0;
        echelle=1;
    }
    if (e.key=="ArrowLeft" && coordX>0){
        coordX-=50;
        rotation=0;
        echelle=-1;
    }
    if (e.key=="ArrowDown" && coordY<(borderY-200)){
        coordY+=50;
        rotation=90;
        echelle=1;
    }
    if (e.key=="ArrowUp" && coordY>0){
        coordY-=50;
        rotation=-90;
        echelle=1;
    }
    majPos();
}

function majPos(){
    img.style.left=coordX+"px";    // OU = `${posX}px`;
    img.style.top=coordY+"px";     // OU = `${posY}px`;
    img.style.transform=`rotate(${rotation}deg) scaleX(${echelle})`;
}