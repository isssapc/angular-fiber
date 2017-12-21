export class Mueble {

    id_mueble?: number;
    clave?: string;
    nombre?: string;
    ancho?: string;
    altura?: string;
    fondo?: string;
    count?:number;

    puertas?:any;
    test?:any;



    public static copiar(mueble: Mueble): Mueble {
        let copia = new Mueble();

        copia.nombre = mueble.nombre;
        copia.clave = mueble.clave;
        copia.nombre = mueble.nombre;
        copia.ancho = mueble.ancho;
        copia.altura = mueble.altura;
        copia.fondo = mueble.fondo;


        return copia;
    }



    public copiar(): Mueble {
        let copia = new Mueble();

        copia.nombre = this.nombre;
        copia.clave = this.clave;
        copia.nombre = this.nombre;
        copia.ancho = this.ancho;
        copia.altura = this.altura;
        copia.fondo = this.fondo;

        return copia;

    }
}