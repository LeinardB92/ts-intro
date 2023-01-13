/*
    ===== Código de TypeScript =====
*/

// *-*-*- DESESTRUCTURACIÓN DE ARGUMENTOS en una Función. *-*-*-

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 150
}

const tableta: Producto = {
    desc: "iPad Air",
    precio: 300
}

export function calculaISV(productos: Producto[]): number[] {
    let total = 0;

    // En este forEACH(), solo estamos sumando todos los precios de los elementos que le pasemos como array.
    productos.forEach(({precio}) => {
        total += precio;
    })
    // Es acá cuando se devuelve el 15% del 'total' 
    return [total, total * 0.15 ];
}

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);
console.log("Total = ", total);
console.log("ISV = ", isv);
