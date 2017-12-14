import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NuevoProyectoComponent } from './components/nuevo-proyecto/nuevo-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';



export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'nuevo-proyecto', component: NuevoProyectoComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'proyecto', component: ProyectoComponent },
    { path: 'catalogos', component: CatalogosComponent },
    
    





    //not found
    { path: '**', redirectTo: 'home' }

];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
