import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: [
  ]
})
export class PortafolioComponent {

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }

}
