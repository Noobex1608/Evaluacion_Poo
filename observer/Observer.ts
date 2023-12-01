
interface Observer {
    notificar(producto: Producto): void;
}


class Producto {
    private observadores: Observer[] = [];
    private precio: number;

    constructor(public nombre: string, precioInicial: number) {
        this.precio = precioInicial;
    }


    agregarObservador(observador: Observer): void {
        this.observadores.push(observador);
    }

 
    quitarObservador(observador: Observer): void {
        this.observadores = this.observadores.filter(o => o !== observador);
    }


    notificarObservadores(): void {
        for (const observador of this.observadores) {
            observador.notificar(this);
        }
    }


    actualizarPrecio(nuevoPrecio: number): void {
        this.precio = nuevoPrecio;
        this.notificarObservadores();
    }


    obtenerPrecio(): number {
        return this.precio;
    }
}


class Cliente implements Observer {
    constructor(public nombre: string) {}


    notificar(producto: Producto): void {
        console.log(`¡Hola ${this.nombre}! El precio del producto ${producto.nombre} ha bajado a ${producto.obtenerPrecio()}.\n`);
    }
}


class AplicacionConsola {
    public static ejecutar(): void {

        const producto = new Producto("Teléfono", 500);


        const cliente1 = new Cliente("Cliente1");
        const cliente2 = new Cliente("Cliente2");

        producto.agregarObservador(cliente1);
        producto.agregarObservador(cliente2);


        producto.actualizarPrecio(450);


        producto.quitarObservador(cliente1);

       
        producto.actualizarPrecio(400);
    }
}


AplicacionConsola.ejecutar();