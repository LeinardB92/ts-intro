/*
    ===== Código de TypeScript =====
*/

// *-*-*- DESESTRUCTURACIÓN DE OBJETOS. *-*-*-
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles {
    autor: string;
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Sapito",
    detalles: {
        autor:"Belinda",
        anio: 2000
    }
}

const {volumen: vol, segundo, cancion, detalles: {autor, anio}} = reproductor;
//const {autor, anio} = detalles;
/*
console.log('El volumen es: ', vol)
console.log('El segundo es: ', segundo)
console.log('La canción es: ', cancion)
console.log('El autor es: ', autor)
console.log('El año es: ', anio)
*/

// *-*-*- DESESTRUCTURACIÓN DE ARREGLOS. *-*-*-
const dbz: string[] = ['Goku', 'Vegueta', 'Trunks'];
const [p1,p2,p3] = dbz;
// Desestructurar un solo elemento
//const [,,p3] = dbz;

console.log('Personaje 1: ', p1)
console.log('Personaje 2: ', p2)
console.log('Personaje 3: ', p3)


// *-*-*- DESESTRUCTURACIÓN DE ARGUMENTOS. *-*-*-

