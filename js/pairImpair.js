/**
 * Consigne :Écrire une fonction `isEven` qui prend un nombre en entrée et retourne `true` si le nombre est pair et `false` sinon.
 * Explication : Un nombre pair est un nombre divisible par 2 sans reste (par exemple 2, 4, 6). Un nombre impair est un nombre qui n'est pas divisible par 2 sans reste (par exemple 1, 3, 5).
 **/


function isEven(number) {
    // si un nombre est divisible par 2, alors il est pair
    // divisible par deux, signifie avoir un reste etant égal à 0
    if ( number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
console.log(isEven(4)); // true
console.log(isEven(7)); // false
