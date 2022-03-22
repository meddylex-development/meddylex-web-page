import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LottieModule } from 'ngx-lottie';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  exports : [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LottieModule
  ],

})
export class SharedModule { }
