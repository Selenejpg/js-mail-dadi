//Generare un numero random da 1 a 6 sia per il giocatore
let giocatore = Math.floor(Math.random() * 6) + 1;
//sia per il computer.
let pc = Math.floor(Math.random() * 6) + 1;

//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if ( giocatore > pc) {
    document.getElementById(`risultato`).innerHTML = `Hai vinto`;
}else if (giocatore < pc) {
    document.getElementById(`risultato`).innerHTML = `Hai perso`; 
}else {
    document.getElementById(`risultato`).innerHTML = `Pari`; 
}