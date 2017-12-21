import { Component, OnInit } from '@angular/core';
import { NuevaPuertaDialogoComponent } from '../../dialogos/nueva-puerta-dialogo/nueva-puerta-dialogo.component';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import "rxjs/add/operator/switchMap";
import { MuebleService } from '../../services/mueble.service';
import { Mueble } from '../../model/mueble';
import { LineaService } from '../../services/linea.service';
import { Linea } from '../../model/linea';
import { PuertaService } from '../../services/puerta.service';
import { Puerta } from '../../model/puerta';

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

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private muebleSrv: MuebleService,
    private lineaSrv: LineaService,
    private puertaSrv: PuertaService
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


