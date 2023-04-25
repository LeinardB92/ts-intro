// /*
//     ===== Código de TypeScript =====
// *-*-*- Clases básicas *-*-*-
/*
class nombreClase{
    // Properties

    // Constructor

    // Accessors

    // Methods
}
*/

/*
class Heroe {
    // Properties
    alterEgo: string;
    edad: number;
    nombreReal: string;

    // Constructor
    constructor(alterEgo: string, edad: number, nombreReal: string) {
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}
*/
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

// Esto es de la lección de extender una clase, se ha comentado para explicar el tema de priorizar composición sobre herencia.
//
// class Heroe extends PersonaNormal {
//     // Constructor
//     constructor(
//         public alterEgo: string,
//         public edad: number,
//         public nombreReal: string) 
//         {
//             super(nombreReal, "New York");
//         }
// }

class Heroe {
    
    // Constructor
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
        public person: PersonaNormal) 
        {
//            this.person = new PersonaNormal(nombreReal);
        }
}

const tony = new PersonaNormal('Tony Stark', 'New York');
const ironMan = new Heroe('Ironman', 44, 'Tony', tony);
console.log(ironMan)