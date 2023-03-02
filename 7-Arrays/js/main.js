
/*
//TABLEAU NUMERIQUES

//déclaration / initialisation
let fruits = ["pomme", "banane"]; //équivalent let fruits = new Array("pomme", "banane");
fruits[2] = "kiwi";
fruits.push("coing");
fruits.push("fraise");
fruits.push("melon");

//utilisation
console.table(fruits);
console.log(fruits.length);

//Parcours du tableau avec 
//Boucle For -si cases vides : elles sont affichées
for (let i=0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}

//Boucle For In -si cases vides : elles ne sont pas affichées
for (let i in fruits){
    console.log(i, fruits[i]);
}

//Boucle For Of -Affiche que le contenu de la case (osef de l'indice)
for (let fruit of fruits){
    console.log(fruit);
}

//Boucle For Each
fruits.forEach(function(fruit,index){
    console.log(index,fruit);
});


//Affichage des données dans un tableau dans la page
let html = `<table>`
for (let fruit of fruits){
    html += `
        <tr>
            <td>${fruit}</td>
        </tr>`
    ;
}

html += `</table>`
document.body.innerHTML = html;
*/

//TABLEAUX D'OBJETS
//Déclaration
/*
let fruits = [];
fruits[0] = {nom:"pomme", prix:1.70};
fruits[1] = {nom:"banane", prix:2.20};
*/

let fruits = [
    {nom:"pomme", prix:1.70},
    {nom:"banane", prix:2.20}
];

//Utilisation
console.table(fruits);

//Affichage des données dans un tableau dans la page
let html = `<table>`
for (let fruit of fruits){
    html += `
        <tr>
            <td>${fruit.nom}</td>
            <td>${fruit.prix} €</td>
        </tr>`
    ;
}

html += `</table>`
document.body.innerHTML = html;
