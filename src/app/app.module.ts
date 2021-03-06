//services

import { LineaService } from './services/linea.service';
import { MuebleService } from './services/mueble.service';
import { ProyectoService } from './services/proyecto.service';
import { PuertaService } from './services/puerta.service';
import { AuthService } from './services/auth.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoProyectoComponent } from './components/nuevo-proyecto/nuevo-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { NuevoProyectoDialogoComponent } from './dialogos/nuevo-proyecto-dialogo/nuevo-proyecto-dialogo.component';
import { RoutingModule } from './app.routing';
import { AngularMaterialModule } from './modulos/angular-material/angular-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NuevaPuertaDialogoComponent } from './dialogos/nueva-puerta-dialogo/nueva-puerta-dialogo.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CrearUsuarioDialogoComponent } from './dialogos/crear-usuario-dialogo/crear-usuario-dialogo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioService } from './services/usuario.service';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { AsignarLineaPuertaDialogoComponent } from './dialogos/asignar-linea-puerta-dialogo/asignar-linea-puerta-dialogo.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoProyectoComponent,
    ProyectosComponent,
    ProyectoComponent,
    CatalogosComponent,
    NuevoProyectoDialogoComponent,
    LayoutComponent,
    MenuComponent,
    ToolbarComponent,
    NuevaPuertaDialogoComponent,
    UsuariosComponent,
    CrearUsuarioDialogoComponent,
    PerfilComponent,
    AsignarLineaPuertaDialogoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule

  ],

  entryComponents: [
    NuevoProyectoDialogoComponent,
    NuevaPuertaDialogoComponent,
    CrearUsuarioDialogoComponent,
    AsignarLineaPuertaDialogoComponent
  ],


  providers: [
    ConfigService,
    UsuarioService,
    LineaService,
    MuebleService,
    ProyectoService,
    PuertaService,
    AuthService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
