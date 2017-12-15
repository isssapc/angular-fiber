import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NuevoProyectoDialogoComponent } from '../../dialogos/nuevo-proyecto-dialogo/nuevo-proyecto-dialogo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  proyectos: any = [
    { nombre: "Cocina Tres Marías", fecha: "2017-12-15" },
    { nombre: "Cocina Loma Bonita", fecha: "2017-12-15" },
    { nombre: "Cocina Del Valle", fecha: "2017-12-15" },
    { nombre: "Cocina JZ Desarrollos", fecha: "2017-12-15" },
    { nombre: "Cocina Dm Construcciones", fecha: "2017-12-15" }
  ];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  createProyecto() {
    console.log("crear proyecto");

    this.dialog.open(NuevoProyectoDialogoComponent, {
      data: {

      },
      width: "400px"
    });
  }

}
