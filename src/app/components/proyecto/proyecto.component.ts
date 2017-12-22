import { Component, OnInit } from '@angular/core';
import { NuevaPuertaDialogoComponent } from '../../dialogos/nueva-puerta-dialogo/nueva-puerta-dialogo.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import "rxjs/add/operator/switchMap";
import { MuebleService } from '../../services/mueble.service';
import { Mueble } from '../../model/mueble';
import { LineaService } from '../../services/linea.service';
import { Linea } from '../../model/linea';
import { PuertaService } from '../../services/puerta.service';
import { Puerta } from '../../model/puerta';
import { AsignarLineaPuertaDialogoComponent } from '../../dialogos/asignar-linea-puerta-dialogo/asignar-linea-puerta-dialogo.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  gabinetes: Gabinete[];
  muebles: Mueble[];
  lineas: Linea[];
  puertas: Puerta[];
  loading: boolean;
  enColumnas = false;
  valor = true;
  muebles_pedido: Mueble[] = [];
  muebles_pedido_desglose: Mueble[] = [];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private muebleSrv: MuebleService,
    private lineaSrv: LineaService,
    private puertaSrv: PuertaService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    console.log("on init");

    this.muebleSrv.getMueblesConPuertas()
      .subscribe((res) => {
        this.muebles = res;
        this.loading = false;

      });

    this.lineaSrv.getLineas()
      .subscribe((res) => {
        this.lineas = res;
        this.loading = false;

      });

    this.puertaSrv.getPuertas()
      .subscribe((res) => {
        this.puertas = res;
        this.loading = false;

      });
  }

  createPuerta() {
    console.log("crear proyecto");

    this.dialog.open(NuevaPuertaDialogoComponent, {
      data: {

      },
      width: "500px"
    });
  }

  asignarPuerta() {

    console.log("Asignar Puerta");

    let dialogRef = this.dialog.open(AsignarLineaPuertaDialogoComponent, {
      data: {
        lineas: this.lineas,
      },
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        if (result.error) {
          this.snackBar.open(result.error, "Cerrar", {
            duration: 2000
          });
        } else {
          console.log(result);




          this.muebles_pedido_desglose.forEach(mueble => {
            for (let i = 0; i < mueble.puertas.length; i++) {
              mueble.puertas[i].linea_puerta = result
            }

          });




          this.snackBar.open("Linea Asignada", "Cerrar", {
            duration: 2000
          });
        }

      }


    });

  }



  actualizar() {
    console.log("actualizar");
    this.muebles_pedido = this.muebles.filter(mueble => mueble.count > 0);
    console.log("pedido", this.muebles_pedido);

    this.muebles_pedido_desglose = [];


    this.muebles_pedido.forEach(mueble => {

      for (let i = 0; i < mueble.count; i++) {
        let clon = Mueble.clonar(mueble);
        clon.index = i;
        this.muebles_pedido_desglose.push(clon);
      }

    });

    console.log("desglose", this.muebles_pedido_desglose);


  }

  actualizarPedido() {
    console.log("desglose", this.muebles_pedido_desglose);
  }

  sumarMueble(mueble: Mueble) {

    //console.log("mueble", mueble);


    if (isNaN(mueble.count) || mueble.count == null) {
      mueble.count = 1;
    } else {
      mueble.count++;
    }



    //console.log("count", mueble.count);
  }

  restarMueble(mueble: Mueble) {

    //console.log("mueble", mueble);

    if (mueble.count > 0) {
      mueble.count--;
    }
    //console.log("count", mueble.count);

  }

}

interface Gabinete {
  id: number;
  count: number;
}


