import { Viaje } from "./Singleton_(tema viaje)";
import { Sistema_viajes } from "./Singleton_(tema viaje)";
const viaje1 = new Viaje("Manta", "Guayaquil", "2023-01-01");
const viaje2 = new Viaje("Manta", "Portoviejo", "2023-02-01");
const viaje3 = new Viaje("Manta", "Quito", "2023-03-01");

const sistemaViajes = Sistema_viajes.obtenerInstancia();


sistemaViajes.agregarViaje(viaje1);
sistemaViajes.agregarViaje(viaje2);
sistemaViajes.agregarViaje(viaje3);


sistemaViajes.mostrarViajes();