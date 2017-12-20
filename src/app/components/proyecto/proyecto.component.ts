import { Component, OnInit } from '@angular/core';
import { NuevaPuertaDialogoComponent } from '../../dialogos/nueva-puerta-dialogo/nueva-puerta-dialogo.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  gabinetes: Gabinete[];
  enColumnas = false;
  valor=true;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.gabinetes = Array<Gabinete>(15).fill({ id: 0, count: 0 }).map((item, i, a) => { return { id: i, count: 0 }; });

    console.log("gabinetes", this.gabinetes);
  }

  createPuerta() {
    console.log("crear proyecto");

    this.dialog.open(NuevaPuertaDialogoComponent, {
      data: {

      },
      width: "500px"
    });
  }

}

interface Gabinete {
  id: number;
  count: number;
}


