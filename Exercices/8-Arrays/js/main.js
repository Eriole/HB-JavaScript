//Déclaration
let items = [
    {marque:"Volvo",modele:"v40",couleur:"grise",prix:35000},
    {marque:"BMW",modele:"Z3",couleur:"noire",prix:55000},
    {marque:"Ferrari",modele:"F40",couleur:"rouge",prix:80000}
];

console.table(items)
let total = 0;
let html = `<div>`
items.forEach(
    function(item,index){
        html += `<ul>
                    <li>Voiture ${index+1}</li>
                    <li>Marque : ${item.marque}</li>
                    <li>Modèle : ${item.modele}</li>
                    <li>Couleur : ${item.couleur}</li>
                    <li>Prix : ${item.prix} €</li>
                </ul>`
        total += item.prix;
    }
);

html += `</div>`
document.body.innerHTML = html;
document.body.innerHTML += `<p>Total : ${total} €</p>`;