export class Mueble {

    id_mueble?: number;
    clave?: string;
    nombre?: string;
    ancho?: string;
    altura?: string;
    fondo?: string;
    precio?: string;
    count?: number;

    index?: number;

    puertas?: any;




    public static copiar(mueble: Mueble): Mueble {
        let copia = new Mueble();

        copia.nombre = mueble.nombre;
        copia.clave = mueble.clave;
        copia.nombre = mueble.nombre;
        copia.ancho = mueble.ancho;
        copia.altura = mueble.altura;
        copia.fondo = mueble.fondo;
        copia.precio = mueble.precio;


        return copia;
    }

    public static clonar(mueble: Mueble): Mueble {
        return JSON.parse(JSON.stringify(mueble));
    }



    public copiar(): Mueble {
        let copia = new Mueble();

        copia.nombre = this.nombre;
        copia.clave = this.clave;
        copia.nombre = this.nombre;
        copia.ancho = this.ancho;
        copia.altura = this.altura;
        copia.fondo = this.fondo;
        copia.precio = this.precio;

        return copia;

    }
}