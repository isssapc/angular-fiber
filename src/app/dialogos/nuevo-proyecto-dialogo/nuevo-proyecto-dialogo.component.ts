import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-nuevo-proyecto-dialogo',
  templateUrl: './nuevo-proyecto-dialogo.component.html',
  styleUrls: ['./nuevo-proyecto-dialogo.component.scss']
})
export class NuevoProyectoDialogoComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NuevoProyectoDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
