import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../slt/pages/home/home.component';
import { NosotrosComponent } from '../slt/pages/nosotros/nosotros.component';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EquipoComponent } from './pages/equipo/equipo.component';



export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ErrorComponent,
    PortafolioComponent,
    ContactoComponent,
    EquipoComponent
    
  ],
  exports : [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SltModule { }
