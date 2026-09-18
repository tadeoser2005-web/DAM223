const prompt = require('prompt-sync')();

let productos = ["Hamburguesa"];

let pedidos = ["agua", "hot dog"];

const carrito = [];

let respuesta = "";

function consultarProductos() {

        console.log("Consultando producto....");
        console.log(productos);

}

function crearPedidos() {

    
        while(true) {

         // respuesta = prompt("Ingresa un producto o escribe salir para terminar:");
            respuesta = prompt("Ingresa un producto o escribe salir para terminar:");

            if(respuesta == null || respuesta.toLowerCase() == 'salir') {
                    break;

            }

            if(respuesta.trim() != "") {

                carrito.push(respuesta);
                console.log(`${respuesta} agregado al carrito`);

            }

        }
        console.log("");
        console.log("Contenido actual del carrito");
        console.log(carrito);
        console.log("")

}

function listarPedidos() {

        console.log("Imprimiendo pedidos.......");
        console.log(pedidos);

}

consultarProductos()
console.log(crearPedidos())
listarPedidos()

function mostrarMenu() {

}
