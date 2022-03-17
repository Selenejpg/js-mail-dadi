//Creare un array con un numero a piacere di elementi.
//Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array

const array1 = [
    `mela`,
    `pera`,
    `banana`,
    `kiwi`,
    `avocado`,
    `arancia`,
    `fragola`,
    `pesca`,
];

console.log(`Il primo array è:`, array1);
console.log(`Gli ultimi 5 elementi sono:`);

for (let i = array1.length -5; i < array1.length; i++) {
    const item = array1[i];
    console.log(item);  
}

//Extra bonus
//Creiamo l'array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
const arr2ItemsNumber = parseInt(
    prompt(`Quanti elementi deve contenere il secondo array?`)
);

//Validazione basilare, non conoscevamo il ciclo while
if (isNaN(arr2ItemsNumber) && arr2ItemsNumber < 5) {
    console.log(`Devi inserire un valore numerico maggiore o uguale a 5`)
}else {
    const array2 = [];

    for (let i = 1; i <= arr2ItemsNumber; i++) {
        const item = Math.floor(Math.random() * 100) + 1;
        array2.push(item);
    }

    console.log(`Il secondo array è:`, array2);
    console.log(`Gli ultimi 5 elementi sono:`);

    for (let i = array2.length - 5; i < array2.length; i++) {
        const item = array2[i];
        console.log(item);
    }
}

//Super extra bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array
const arr3ItemsNumber = parseInt(
    prompt(`Quanti elementi deve contenere il terzo array?`)
)
//Validazione basilare, non conoscevamo il ciclo while
if (isNaN(arr3ItemsNumber)) {
    console.log("Per il numero di elementi dell'array devi inserire un valore numerico");
} else {
    const itemsToExtract = parseInt(prompt("Quanti elementi devo estrarre dall'array"));

    if (isNaN(itemsToExtract) || itemsToExtract > arr3ItemsNumber) {
      console.log("Per gli elementi da estrarre devi inserire un valore numerico minore o uguale al numero di elementi dell'array");
    } else {
        const array3 = [];
        
        for (let i = 1; i < arr3ItemsNumber; i++) {
            const item = Math.floor(Math.random() * 100) + 1;
            array3.push(item);
        }

        console.log(`Il terzo array è:`, array3);
        console.log(`Gli ultimi ${itemsToExtract} elementi sono:`);

        for (let i = array3.length - itemsToExtract; i < array3.length; i++) {
            const item = array3[i];
            console.log(item);
        }
    }
}
