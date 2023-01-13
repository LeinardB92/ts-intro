/*
    ===== Código de TypeScript =====
*/
// Todos los elementos son del tipo string[]
let habilidades : string[] = ["f", "g", "h"];
// Los elementos son de tipo string o number, aunque no se recomienda que en un arreglo halla más de un tipo.
let habilidades2 : (string | number)[] = ["gol", 55]

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; 
}

const personaje: Personaje = {
    nombre: "Danox",
    hp: 95,
    habilidades: ["Bash","Counter","Healing"] 
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);