/**
 * Écrire une fonction `countOccurrences` qui prend une chaîne de caractères et un caractère en entrée et retourne le nombre de fois que le caractère apparaît dans la chaîne.
 * Une occurrence est le nombre de fois qu'un certain caractère apparaît dans une chaîne de caractères.
 **/

function countOccurrences(str, char) {
    //préparer mes données , je met tout en minuscule
    str = str.toLowerCase();
    char = char.toLowerCase();

    //compteur pour compter le nombre d'occurence
    let count = 0;

    // je boucle sur la longueur de ma chaine de caractère
    for(let i=0; i< str.length; i++){
        /** 1ere écriture
         * if (str[i] == char){
         *             count++; // count+=1 ; count = count +1;
         *         }
         **/

        //je compare mon mot à trouver avec le charactère à l'index i de ma str
        if(str.charAt(i) == char){
            count++;
        }

    }
    return count;
}


/** deuxieme écriture possible en une ligne
function countOccurrences(str,char) {
    // je met ma chaine ainsi que le char en minuscule, je coupe ma chaine en tableau
    // puis, comme je commence à compter à 0 donc je fais -1
    return str.toLowerCase().split(char.toLowerCase()).length-1;
}
**/

// Exemple d'utilisation
console.log(countOccurrences("hello world", "o")); // 2
console.log(countOccurrences("hello world", "O")); // 2
console.log(countOccurrences("javascript", "a")); // 2
console.log(countOccurrences("javascript", "J")); // 1
console.log(countOccurrences("javascript", "y")); // 0