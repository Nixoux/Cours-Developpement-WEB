//pour écrire un commentaire
//le nom du fichier peut être script.js ou ce qu'on veut


/*   ================
MON PREMIER SCRIPT
blab bla bla
bla bla bla
============ */

//document.write(document.querySelector("title").innerHTML) possible mais pas idéal
console.log("le titre de ma page", document.querySelector("title").innerHTML)
// t c'est le nom de la variable 
// = opérateur d'affectation
// ___ c'est la valeur
//t = 18 =/= texte="18"
//t + 2 = 20 
//texte + 2 = 182

// ne plus du tout utiliser var pour définir une variable. C'est insensé.
//      plutot utiliser let pour définir une variable
//      le mot clés const c'est pour des valeurs qui ne vont pas changer. 
//EXEMPLE : let maVariable = "c'est super" 

//maVariable + 10 = C'est super10
//ma variable fonctionne comme une inconnu en math (x) le résultat n'est pas stocker nul part
//si on ré

//monAutreVariable = monautreVariable + 10
//c'est laborieux
//on préfère monAutreVariable += 10
//          similairement : /=  ; *=

//monAutreVariable++
//          ça fait + 1

//ajouter une image à la page didrectement depuis JS
//1. créer une balise image

let maBaliseImage = document.createElement("img")
// 2.1 ajouter un attribut
maBaliseImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CatLolCatExample.jpg/330px-CatLolCatExample.jpg")
// 2.2. ajouter une classe
// ne pas hésiter à regarder sur devdocs.io (pour cette semaine on s'intéresse aux DOM)
maBaliseImage.classlist.add("bleu");
// 3. ajouter cet élément à la page
document.querySelector("body").appendChild(maBaliseImage) //important de ne pas mettre de guillement à mabaliseImage parce que c'est une variable

document.querySelector("h1").classList.add("bleu"); //ajouter un élément CSS

//l'intéret d'utiliser cette methode c'est pour visualiser des données, c'est pour récuperer des données d'une base de données directement.
//          site qui répertorie ce genre d'usage : https://d3js.org/



//DOM
//en dessous on a méthode et propriété
//on défini nos variables avec let
// deux type de chiffres avec ou sans guillemet