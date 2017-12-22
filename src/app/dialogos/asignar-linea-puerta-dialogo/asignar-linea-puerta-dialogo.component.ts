import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material";
import { LineaService } from '../../services/linea.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-asignar-linea-puerta-dialogo',
  templateUrl: './asignar-linea-puerta-dialogo.component.html',
  styleUrls: ['./asignar-linea-puerta-dialogo.component.scss']
})
export class AsignarLineaPuertaDialogoComponent implements OnInit {

  line_puerta: any = {};

  constructor(
    private LineaSrv: LineaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AsignarLineaPuertaDialogoComponent>
  ) { }

  ngOnInit() {
  }

}
