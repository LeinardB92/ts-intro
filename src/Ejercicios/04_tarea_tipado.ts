/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion
    mostrarDireccion: () => string
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: "SpiderMan",
    edad: 30,
    direccion: {
        calle: "Mian St.",
        pais: "EUA",
        ciudad: "NY"
    },
    mostrarDireccion() {
        return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion()
console.log(direccion);