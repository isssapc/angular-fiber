import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('navbar') navbar;

  routes: any = [
    { title: "Home", route: "home" },
    { title: "Proyectos", route: "proyectos" },
    { title: "Catálogos", route: "catalogos" },
    { title: "Proyecto", route: "proyecto" },
    { title: "Perfil", route: "perfil" },
    { title: "Usuarios", route: "usuarios" },

  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(route) {

    this.navbar.toggle();
    this.router.navigate([route]);
  }

}
