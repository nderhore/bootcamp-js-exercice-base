/**
 * Écrire une fonction `safeDivide` qui prend deux nombres en entrée et retourne le résultat de leur division. Si le deuxième nombre est 0, la fonction doit retourner `"Erreur : Division par zéro"`.
 * Rappel : La division par zéro est indéfinie en mathématiques et en programmation, elle produit une erreur ou une valeur infinie.
 **/


function safeDivide(a, b) {
    // a : numerateur
    // b : dénominateur

    // si le dénominateur est égal à 0, c'est impossible
    // sinon, je fais la division

    // attention, si je fais b == 0 != b ===0
    // == : verifie juste le contenu 0 == "0" -> vrai
    // === : verifie type + contenu 0 === "0" -> faux
    if( b === 0){
        return "Erreur : Division par zéro";
    } else {
        return a / b;
    }
}

// Exemple d'utilisation
console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // "Erreur : Division par zéro"
console.log(safeDivide(10, -1));