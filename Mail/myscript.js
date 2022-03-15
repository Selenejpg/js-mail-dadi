let mailAutorizzate = [

    `barney@gmail.com`,
    `marshall@gmail.com`,
    `lily@gmail.com`,
    `robin@gmail.com`,
    `ted@gmail.com`,
    `riccardinofoffolo@gmail.com`,
    `brunoliegibastonliegi@gmail.com`,
    `mariottide@gmail.com`,
    `padremaronno@gmail.com`,
]

let mail = prompt(`Inserisci e verifica la tua mail`);

let mailTrovata = false;

for (let i = 0; i < mailAutorizzate.length; i++){
    if (mailAutorizzate[i] == mail) {
        mailTrovata = true
    }
}

if (mailTrovata == true) {
     document.getElementById(`mail`).innerHTML = `Access granted`
}else {
     document.getElementById(`mail`).innerHTML = `Access denied` 
}