import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SmartLawTech-App';
  

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }

  constructor(){

  }

}
