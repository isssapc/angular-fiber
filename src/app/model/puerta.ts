export class Puerta {

    id_puerta_mueble?: number;
    id_mueble?: string;
    ancho?: string;
    altura?: string;


    public static copiar(puerta: Puerta): Puerta {
        let copia = new Puerta();

        copia.id_puerta_mueble = puerta.id_puerta_mueble;
        copia.id_mueble = puerta.id_mueble;
        copia.ancho = puerta.ancho;
        copia.altura = puerta.altura;



        return copia;
    }



    public copiar(): Puerta {
        let copia = new Puerta();

        copia.id_puerta_mueble = this.id_puerta_mueble;
        copia.id_mueble = this.id_mueble;
        copia.ancho = this.ancho;
        copia.altura = this.altura;



        return copia;

    }

}
