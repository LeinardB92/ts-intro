/*
    ===== Código de TypeScript =====
*/
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
 
interface TaxCalculationOption{
    tax: number;
    productos: Producto[];
}

export function taxCalculation(opciones: TaxCalculationOption): number[] {
    let total = 0;

    // En este forEACH(), solo estamos sumando todos los precios de los elementos que le pasemos como array.
    opciones.productos.forEach(({precio}) => {
        total += precio;
    })
    // Es acá cuando se devuelve el 15% del 'total' 
    return [total, total * opciones.tax ];
}

//Carrito de compra
const shoppingCart = [telefono, tableta];
const tax = 0.15;

const [total, isv] = taxCalculation({tax: tax, productos: shoppingCart});
console.log("Total = ", total);
console.log("ISV = ", isv);






