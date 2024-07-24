/**
 * Consigne : Écrire une fonction `isPalindrome` qui prend une chaîne de caractères en entrée et retourne `true` si la chaîne est un palindrome et `false` sinon.
 * Rappel :  Un palindrome est une chaîne de caractères qui se lit de la même façon de gauche à droite et de droite à gauche (par exemple "radar", "level").
 **/


function isPalindrome(str) {

    /** je prend la chaine de caractère
     * je la converti en tableau, chaque indice du tableau comporte une lettre
     * de ma chaine.
     * Ensuite, j'inverse la chaine grace à reverse (une méthode que possede les tableaux)
     * exemple : ['j','a','v','a'] deviens ['a','v','a','j']
     * Enfin, je converti mon tableau en une chaine caractère, donc ['a','v','a','j'] deviens avaj
    **/
    return str.toLowerCase()
        .split("")
        .reverse()
        .join("") === str
}

// Exemple d'utilisation
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("javascript")); // false
