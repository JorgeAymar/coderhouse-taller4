
// Taller Coderhouse 

class Product { // clase producto
    constructor(name, country, price, description){ //funcion contructora producto
        this.name = name //atributo
        this.country = country //atributos
        this.price = price //atributos en dolares
        this.description = description //atributos
    }
    calculatePriceIVA(){ //funciones o metodos
        let IVA = 19
        return (this.price) + ((this.price * IVA) / 100)
    }
    getName(){ //funciones o metodos
        return this.name
    }

    getCountry(){ //funciones o metodos
        return this.country
    }

    getPrice(){ //funciones o metodos
        return this.price
   }

   getDescription(){ //funciones o metodos
    return this.description
}
}

// Se crea la clase con detalles de Pedidos
class DetallePedido {
    constructor(product, persona){
        this.product = product
        this.persona = persona   
    }
}

// Clasde de Pedido
class Pedido{
    constructor(date, pedido){
        this.date = date
        this.pedido = pedido
    }
}


// Se crean lista de Objeto de Productos Iniciales
const listaProductos = []

listaProductos.push(new Product("Naara", "Portugal", 500, "Yate para vacaciones en Mediterraneo, zarpa de Isla en Portugal"))
listaProductos.push(new Product("My Princess", "Miami", 150, "Yate para vacaciones en caribe, zarpa de Miami"))
listaProductos.push(new Product("La Lolita", "Spain", 100, "Yate para vacaciones en caribe, zarpa de Islas Canarias"))
listaProductos.push(new Product("Gone with the Wind", "Italy", 175, "Yate para vacaciones en caribe, zarpa de Porto Italiano"))
listaProductos.push(new Product("Sea Wolf", "Chile", 100, "Yate para vacaciones en caribe, zarpa de Valparaisio"))
listaProductos.push(new Product("Girl Gome", "Miami", 100, "Yate para vacaciones en caribe, zarpa de Miani"))


console.log('Listado de Embarcaciones para Rentar')

// for (let i = 0; i < listaProductos.length; i++){
//     console.log(" ")
//     console.log(" Nombre Embarcación: " + listaProductos[i].getName())
//     console.log(" Pais Origen: " + listaProductos[i].getCountry())
//     console.log(" Precio Alojamiento Mes: US$ " + listaProductos[i].getPrice())
//     console.log(" Descripción: " + listaProductos[i].getDescription())
//     console.log(" Precio con IVA: US$ " + listaProductos[i].calculatePriceIVA());
// }

// for (const listaProducto of listaProductos){
//     console.log(" ")
//     console.log(" Nombre Embarcación: " + listaProducto.getName())
//     console.log(" Pais Origen: " + listaProducto.getCountry())
//     console.log(" Precio Alojamiento Mes: US$ " + listaProducto.getPrice())
//     console.log(" Descripción: " + listaProducto.getDescription())
//     console.log(" Precio con IVA: US$ " + listaProducto.calculatePriceIVA());
// }


console.log(' ')
console.log('*** Fin del Proceso creacion de Productos ***')


// Ejemplo de encontrar Productos mas economicos
const economicos = listaProductos.filter((item) => item.price <= 100 )
console.log("Buscar Productos economicos")
console.log(" ")
console.log(economicos)
console.log("*** fin de listado economicos ***")


// Ejemplo lista nombres Yates
const newlist = listaProductos.map((item) => item.name)
console.log("Productos listados por nombre")
console.log(" ")
console.log(newlist)
console.log("*** fin de listado nombes de yates ***")

// Ejemplo Genera Nueva lista ordenada de Productos nombres ascendetes
const listOrdenada = listaProductos.sort((a,b) => {
    if (a.name > b.name){
        return 1
    }
    if (a.name < b.name){
        return -1
    }

    // a es igual a b
    return 0
})

console.log(" Nueva lista de productos ordenadas por nombre")
console.log(" ")
console.log(listOrdenada)
console.log("*** fin de la lista ordenada ***")


// Ejemplo Calcula total $$ de inventario de productos
const total = listaProductos.reduce((accum, item) => accum + item.price, 0)
console.log("Imprime total inventario del sitio")
console.log(" ")
console.log("el total del inventario es US$: " + total)
console.log("*** fin total inventario ***")

console.log("*** fin total inventario ***")
console.log(" ")

console.log(" Imprime lista de producto disponibles")
console.log(" -------------------------------------")

// Imprime Lista de productos disponibles 
listaProductos.forEach((item, index, array) => {
    console.log(" ")
    console.log ("Yate: '" + item.name + "' precio por persona US$ " + item.price)
})

console.log(" ")
console.log("*** Simula comprar Item ***")
// Simula una compra

let nombre = prompt("ingrese nombre de Producto valido de la lista o 'exit' para salir")

if (nombre != "exit"){
    // busqueda de item de venta usando find()
    const localiza = listaProductos.find((item, index) => {
        if (item.name === nombre) {
            let idCompra = index // indice de dato a comprar
            let cantPersonas = parseInt(prompt("ingrese cantidad de personas que tomaran Yate"))

            console.log("Item encontrado " + item.name + " su indice : " + index)
            console.log("Cantidad Comprada " + cantPersonas)

            if ((idCompra >= 0) && (idCompra < listaProductos.length)) {
                const myDetallePedido = new DetallePedido(listaProductos[idCompra], cantPersonas)
                const myPedido = new Pedido (Date(), myDetallePedido)

                // Imprime Compra
                console.log(" ")
                console.log("Compra Simulada : Impresion Voucher")

                console.log(myPedido)
                console.log(myDetallePedido)
                console.log(" Total a pagar: US$ " + cantPersonas * listaProductos[idCompra].calculatePriceIVA() + " IVA Incluido")
            
                return true
            }
            
        }
    })  

    if (!localiza){
        console.log("Error: Nombre Producto: " + nombre + " no fue encontrado en la lista de productos, no es posible comprarlo")
        console.log (" ")
    }
}

console.log("Fin del programa...")
