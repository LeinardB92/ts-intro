/*
    ===== Código de TypeScript =====
*/
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

class Heroe extends PersonaNormal {
    // Constructor
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string) {
        super(nombreReal, "New York");
    }
}

const ironMan = new Heroe('Ironman', 44, 'Tony');
console.log(ironMan)
