/*
FORCE DU MOT DE PASSE
FAIBLE : entre 0 et 3 caractères
MOYEN : entre 4 et 6 caractères
FORT : 7+ caractères
TRES FORT : RegExp de mots de passe fort ( 1 maj, 1 min, 1 chiffre, 1 caractère spécial minimum)
https://ihateregex.io/expr/password  
^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$ 

*/
let icone = document.querySelector("i.bi");

function isPwdStrong(champ){
    let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    return re.test(champ);
}

function forcePwd(champ){
    let nbCharac = champ.value.length;
    if (nbCharac<=3) icone.className="bi bi-reception-1";
    if (nbCharac>=4) icone.className="bi bi-reception-2";
    if (nbCharac>=7) icone.className="bi bi-reception-3";
    if (isPwdStrong(champ.value)==true) icone.className="bi bi-reception-4";
};