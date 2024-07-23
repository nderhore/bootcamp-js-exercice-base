/**
 * Consigne : Écrire une fonction `fibonacci` qui prend un nombre `n` en entrée et retourne le nombre `n` de la n-ième itération de la séquence de Fibonacci.
 *
 * Rappel :  La séquence de Fibonacci est une suite de nombres où chaque nombre est la somme des deux précédents, commençant par 0 et 1. Les premiers termes de la séquence sont 0, 1, 1, 2, 3, 5, 8, etc.
 **/

function fibonacci(n) {

    // si n est inférieur égal à 1, alors, je retourne n
    if(n<=1){
     return n;
    }

    /** j'ai besoin des deux premier terme de la série
     * ainsi qu'une variable tampon, pour, calculer le prochain terme
     **/
    let premierNombre = 0;
    let deuxiemeNombre = 1;
    let varTampon;

    // 0 et 1
    // 1 et 1
    // 1 et 2
    // 2 et 3
    // 3 et 5

    //je vais boucler de 2 jusque n. le 1 est ignoré
    for(let i=2; i<=n; i++){
        // calculer le prochain terme : 2
        varTampon = premierNombre + deuxiemeNombre; // 2

        //deplacer le deuxieme nombre en tant que premier
        premierNombre = deuxiemeNombre;

        //deplacer le nouveau nombre à la position de b
        deuxiemeNombre = varTampon;
    }
    return deuxiemeNombre;
}

// Exemple d'utilisation
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55

