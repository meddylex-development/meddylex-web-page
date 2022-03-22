import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './slt/pages/home/home.component';
import { ErrorComponent } from './slt/pages/error/error.component';
import { NosotrosComponent } from './slt/pages/nosotros/nosotros.component';
import { PortafolioComponent } from './slt/pages/portafolio/portafolio.component';
import { ContactoComponent } from './slt/pages/contacto/contacto.component';
import { EquipoComponent } from './slt/pages/equipo/equipo.component';

const routes : Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'home'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'equipo',
    component: EquipoComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path : '404',
    component : ErrorComponent
  }
  
  ] 
  const routerOptions: ExtraOptions = {
    anchorScrolling: "enabled",
    scrollPositionRestoration: 'enabled',
    useHash : true
  }

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,routerOptions)
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }















