export class ContactUser {
    nombre: string;
    email: string;
    telefono: number;
    sujeto: string;
    mensaje: string;
    pais: string;

    constructor(nombre: string, email: string, telefono: number, sujeto: string, mensaje: string, pais: string) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.sujeto = sujeto;
        this.mensaje = mensaje;
        this.pais = pais;
    }
}