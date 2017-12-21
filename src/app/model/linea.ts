export class Linea {

    id_linea?: number;
    clave?: string;
    linea?: string;
    modelo?: string;
    color?: string;
    precio_m2?: string;
    precio_marco?: string;
    precio_mullion?: string;
    bg_color?: string;
    src?: string;


    public static copiar(linea: Linea): Linea {
        let copia = new Linea();

        copia.id_linea = linea.id_linea;
        copia.clave = linea.clave;
        copia.linea = linea.linea;
        copia.modelo = linea.modelo;
        copia.color = linea.color;
        copia.precio_m2 = linea.precio_m2;
        copia.precio_marco = linea.precio_marco;
        copia.precio_mullion = linea.precio_mullion;
        copia.bg_color = linea.bg_color;
        copia.src = linea.src;


        return copia;
    }



    public copiar(): Linea {
        let copia = new Linea();


        copia.id_linea = this.id_linea;
        copia.clave = this.clave;
        copia.linea = this.linea;
        copia.modelo = this.modelo;
        copia.color = this.color;
        copia.precio_m2 = this.precio_m2;
        copia.precio_marco = this.precio_marco;
        copia.precio_mullion = this.precio_mullion;
        copia.bg_color = this.bg_color;
        copia.src = this.src;

        return copia;

    }


}