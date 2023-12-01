export class Viaje {
    constructor(public origen: string, public destino: string, public fecha: string) {}
}

export class Sistema_viajes {
    private static instancia: Sistema_viajes;
    private listaViajes: Viaje[] = [];

    private constructor() {}
    
    // instancia única del SistemaViajes
    public static obtenerInstancia(): Sistema_viajes {
        if (!Sistema_viajes.instancia) {
            Sistema_viajes.instancia = new Sistema_viajes();
        }
        return Sistema_viajes.instancia;
    }

    // agregacion de nuevos viajes a la lista
    public agregarViaje(viaje: Viaje): void {
        this.listaViajes.push(viaje);
    }

    // muestra de datos de la lista
    public mostrarViajes(): void {
        for (const viaje of this.listaViajes) {
            console.log(`Origen: ${viaje.origen}, Destino: ${viaje.destino}, Fecha: ${viaje.fecha}`);
        }
    }
}

