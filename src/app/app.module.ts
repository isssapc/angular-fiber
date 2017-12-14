import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoProyectoComponent } from './components/nuevo-proyecto/nuevo-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { NuevoProyectoDialogoComponent } from './dialogos/nuevo-proyecto-dialogo/nuevo-proyecto-dialogo.component';
import { RoutingModule } from './app.routing';
import { AngularMaterialModule } from './modulos/angular-material/angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoProyectoComponent,
    ProyectosComponent,
    ProyectoComponent,
    CatalogosComponent,
    NuevoProyectoDialogoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
   
  ],

  entryComponents: [
    NuevoProyectoDialogoComponent
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
