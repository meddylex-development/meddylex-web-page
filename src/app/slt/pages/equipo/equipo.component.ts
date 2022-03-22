import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [
  ]
})
export class EquipoComponent  {

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }

  dropdown_classJ : string = "dropdown-juan no-display";
  dropdown_classE : string = "dropdown-edwin no-display";
  ver_classJ : string = "mas";
  ver_classE : string = "mas";
  main_Class : string = "";
  flex_classJ:string="";
  flex_classE:string="";

  dropDownJuan(){

    this.dropdown_classJ = "dropdown-juan slide-in-right";
    this.ver_classJ = "no-display";
    this.main_Class = "activado";
    this.flex_classJ = "row-active";
  }

  dropDownEdwin(){

    this.dropdown_classE = "dropdown-edwin slide-in-left";
    this.ver_classE = "no-display";
    this.main_Class = "activado";
    this.flex_classE = "row-active";
  }
  

}
