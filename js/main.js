const misProductos = [
    {
        id: 1,
        nombre: 'Remera Blanca Levi\'s',
        tipo: 'remera',
        precio: 15.0
    },
    {
        id: 2,
        nombre: 'Buzo negro Lee',
        tipo: 'buzo',
        precio: 25.0
    },
    {
        id: 3,
        nombre: 'Zapatilla negra Vans',
        tipo: 'zapatilla',
        precio: 20.0
    },
    {
        id: 4,
        nombre: 'Remera Gris Medio Vinson',
        tipo: 'remera',
        precio: 12.0
    }
]

class Carrito {
    constructor() {
        this.productosParaMostrar = []
        this.productosEnElCarrito = []
        this.total = 0
    }
    agregarAlCarrito(producto) {
        this.productosParaMostrar.push(producto.nombre)
        this.productosEnElCarrito.push(producto)
        this.calcularPrecioTotal()
    }
    mostrarCarrito() {
        return this.productosParaMostrar
    }
    calcularPrecioTotal() {
        this.total = this.productosEnElCarrito.reduce((acc, val) => acc + val.precio, 0)
        return this.total
    }
}

class Productos {
    constructor() {
        this.productos = []
    }
    cargarProducto(producto) {
        this.productos.push(producto)
    }

    mostrarProductos() {
        return this.productos
    }
}

class Producto {
    constructor(id, nombre, tipo, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
        this.cantidad = 1
    }
}

const carrito = new Carrito()

const productos = new Productos()

misProductos.forEach((producto) => {
    const nuevoProducto = new Producto(
        producto.id,
        producto.nombre,
        producto.tipo,
        producto.precio,
        producto.cantidad
    )

    productos.cargarProducto(nuevoProducto)
})


let menu = 0

while (menu != -1) {
    menu = +prompt(
        'Ingrese el producto que desea comprar: \n \n 1 - Remeras \n 2 - Buzos \n 3 - Zapatillas \n \n Escriba -1 para terminar'
    )

    if (menu === -1) {
        alert('Programa Terminado')
        break
    }

    if (menu === 1) {
        const productosPorProcesador = productos.mostrarProductos().filter((producto) => {
            return producto.tipo === 'remera'
        })
        const listado = productosPorProcesador.map(
            (producto) => '\n' + producto.id + ' - ' + producto.nombre + '\n'
        )

        let buscarSeleccion

        while (!buscarSeleccion) {
            seleccion = +prompt('Seleccione el número de producto que desea comprar: ' + listado)

            buscarSeleccion = productosPorProcesador.find((producto) => producto.id === seleccion)
            if (!buscarSeleccion) {
                alert('Ingrese un número correcto por favor')
            }
        }

        carrito.agregarAlCarrito(buscarSeleccion)
        alert(
            'Producto agregado exitosamente, su carrito es \n' + JSON.stringify(carrito.mostrarCarrito())
        )
        alert('Total hasta el momento: $' + carrito.calcularPrecioTotal())
    }

    else if (menu === 2) {
        const productosPorProcesador = productos.mostrarProductos().filter((producto) => {
            return producto.tipo === 'buzo'
        })
        const listado = productosPorProcesador.map(
            (producto) => '\n' + producto.id + ' - ' + producto.nombre + '\n'
        )

        let buscarSeleccion

        while (!buscarSeleccion) {
            seleccion = +prompt('Seleccione el número de producto que desea comprar: ' + listado)

            buscarSeleccion = productosPorProcesador.find((producto) => producto.id === seleccion)
            if (!buscarSeleccion) {
                alert('Ingrese un número correcto por favor')
            }
        }

        carrito.agregarAlCarrito(buscarSeleccion)
        alert(
            'Producto agregado exitosamente, su carrito es \n' + JSON.stringify(carrito.mostrarCarrito())
        )
        alert('Total hasta el momento: $' + carrito.calcularPrecioTotal())
    }

    else if (menu === 3) {
        const productosPorProcesador = productos.mostrarProductos().filter((producto) => {
            return producto.tipo === 'zapatilla'
        })
        const listado = productosPorProcesador.map(
            (producto) => '\n' + producto.id + ' - ' + producto.nombre + '\n'
        )

        let buscarSeleccion

        while (!buscarSeleccion) {
            seleccion = +prompt('Seleccione el número de producto que desea comprar: ' + listado)

            buscarSeleccion = productosPorProcesador.find((producto) => producto.id === seleccion)
            if (!buscarSeleccion) {
                alert('Ingrese un número correcto por favor')
            }
        }

        carrito.agregarAlCarrito(buscarSeleccion)
        alert(
            'Producto agregado exitosamente, su carrito es \n' + JSON.stringify(carrito.mostrarCarrito())
        )
        alert('Total hasta el momento: $' + carrito.calcularPrecioTotal())
    }
    else {
        alert('ATENCION!!!, Ingrese una opcion valida!')
    }
}