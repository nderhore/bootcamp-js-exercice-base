
/**
 * Écrire une fonction `isPrime` qui prend un nombre en entrée et retourne `true` si le nombre est un nombre premier et `false` sinon.
 * Un nombre premier est un nombre entier supérieur à 1 qui n'a pas d'autres diviseurs que 1 et lui-même (par exemple 2, 3, 5, 7).
**/


function isPrime(number) {

    // si le nombre est égal à 1 ou inferieur , il n'est pas premier
    if(number<=1){
        return false;
    }

    // si il est superieur à 1, je test tous les diviseur de ce nombre
    // 5/ 2 , 5/3 , 5/4
    for (let i=2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}


/**
function isPrime(number, divisor = 2) {
    console.log(" et c'est parti pour un tour !")
    if(number<=1){
        return false;
    }
    if(divisor == number){
        return true;
    }
    if (divisor % number == 0){
        return false;
    }
    return isPrime(number, divisor+1);
}
**/
// Exemple d'utilisation
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
