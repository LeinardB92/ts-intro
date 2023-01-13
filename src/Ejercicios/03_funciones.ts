/*
    ===== Código de TypeScript =====
*/
// Funciones Básicas.
//Función clásica
function sumar(a: number, b: number): number{
    return a + b;
}

// Función de flecha o incognita
const sumarFlecha = (a: number, b: number): number =>{
    return a + b
}

function multiplicar(a: number, b?: number, c: number = 2): number {
    return a*c
}

console.log(sumar(5, 8))
console.log(sumarFlecha(5, 8))
console.log(multiplicar(5))

// Funciones con objetos como argumentos.
// Curar un personaje
interface PersonajeX {
    nombre: string;
    hp : number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeX, curarX: number): void {
    personaje.hp += curarX;
} 

const nuevoPersonaje: PersonajeX = {
    nombre: "Danox",
    hp: 50,
    mostrarHp() {
        console.log("Puntos de vida:", this.hp)
    }
} 

curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarHp();