import { Component} from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }

  serviciosJuridicos : AnimationOptions = {
    path : 'assets/lottie/1.serviciosJuridicos.json'
  }

  tecnologiasCognitivas : AnimationOptions = {
    path : 'assets/lottie/2.TecnologiasCognitivas.json'
  }
  




  constructor() { }

  
}
