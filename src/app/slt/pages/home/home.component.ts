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
  

  dropdown_classV:string = "valores-dropdown desactivado";
  dropdown_classP:string = "valores-dropdown desactivado";

  dropDownVState:boolean = false;
  dropDownPState:boolean = false;
  dropDownTitle : string = "";
  dropDownContent : string = "";

  valores: any = 
    { 
      
      Emision_incapacidad:{
        titulo: "Emisión incapacidad",
        contenido : "Entendemos que el interés común prevalece sobre el particular, nos adherimos a los principios de desarrollo sostenible, estamos dispuestos a colaborar con los demás por el beneficio común, y obramos en consecuencia"
      },

      Concepto_rehabilitacion:{
        titulo : "Concepto rehabilitación",
        contenido : "Nos situamos en el lugar del otro, lo escuchamos, lo valoramos y somos receptivos a sus necesidades, haciendo de la armonía y confianza las bases fundamentales de nuestras relaciones"
      },

      Calificacion_origen:{
        titulo: "Calificación de origen",
        contenido: "Actuamos con honestidad, lealtad y franqueza. Hacemos lo que decimos y cumplimos nuestros compromisos"
      },

      Calificacion_PCL:{
        titulo: "Calificación de PCL",
        contenido: "Somos autoexigentes, ordenados y perseverantes. Agregamos un esfuerzo extra para convertir los retos y metas en logros y alcanzar la excelencia como práctica habitual"
      },

      Auditoria_Incapacidades_Prolongadas:{
        titulo: "Auditoria Incapacidades Prolongadas",
        contenido: "Somos autoexigentes, ordenados y perseverantes. Agregamos un esfuerzo extra para convertir los retos y metas en logros y alcanzar la excelencia como práctica habitual"
      },

      Identificacion_presuntos_Abusos_derecho:{
        titulo: "Identificación presuntos Abusos del derecho",
        contenido: "Somos autoexigentes, ordenados y perseverantes. Agregamos un esfuerzo extra para convertir los retos y metas en logros y alcanzar la excelencia como práctica habitual"
      },

      E_RETHUS:{
        titulo: "E-RETHUS",
        contenido: "Somos autoexigentes, ordenados y perseverantes. Agregamos un esfuerzo extra para convertir los retos y metas en logros y alcanzar la excelencia como práctica habitual"
      },

      Business_Intelligence:{
        titulo: "Business Intelligence",
        contenido: "Somos autoexigentes, ordenados y perseverantes. Agregamos un esfuerzo extra para convertir los retos y metas en logros y alcanzar la excelencia como práctica habitual"
      }

    }

  activarDropDownV(codigo : string){

    if(!this.dropDownVState){

      this.dropdown_classV = "valores-dropdown";
      this.dropdown_classP += " desactivado";

      const opcion = this.valores[codigo];
      const {titulo,contenido} = opcion;

      this.dropDownTitle = titulo;
      this.dropDownContent = contenido;

      this.dropDownVState = true;
      this.dropDownPState = false;
      
    }else{

      this.dropdown_classP += " desactivado";
      const opcion = this.valores[codigo];
      const {titulo,contenido} = opcion;

      this.dropDownPState = false;

      this.dropDownTitle = titulo;
      this.dropDownContent = contenido;
      
    }
  }

  constructor() { }
  
}
