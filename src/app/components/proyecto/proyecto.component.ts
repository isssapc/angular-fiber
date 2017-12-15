import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  gabinetes: Gabinete[];

  constructor() { }

  ngOnInit() {
    this.gabinetes = Array<Gabinete>(15).fill({ id: 0, count: 0 }).map((item, i, a) => { return { id: i, count: 0 }; });

    console.log("gabinetes", this.gabinetes);
  }

}

interface Gabinete {
  id: number;
  count: number;
}
