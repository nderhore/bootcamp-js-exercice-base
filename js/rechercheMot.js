/**
 * Consigne : Écrire une fonction `containsWord` qui prend une phrase et un mot en entrée et retourne `true` si le mot est présent dans la phrase et `false` sinon.
 * Explication : On cherche à savoir si un mot complet (et non une partie d'un mot) est présent dans une phrase donnée.
 **/


function containsWord(sentence, word) {

    // programmation
    //La pro est amusante => faux
    // La programmation est amusante => vrai

    // includes =>
    // je vais prendre une lettre de sentence , je vais la comparer à la premiere lettre de word
    // si c'est ok , je continu , x fois
    // si j'arrive à la fin du mot word alors, je sais que le word est inclus dans ma chaine


    return sentence.toLowerCase().includes(word.toLowerCase());
}

// Exemple d'utilisation
console.log(containsWord("La programmation est amusante", "programmation")); // true
console.log(containsWord("La programmation est amusante", "difficile")); // false

