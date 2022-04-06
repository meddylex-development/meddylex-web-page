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
        titulo : "Concepto rehabilitación y reintegro laboral",
        contenido : "Suministramos asesoría profesional especializada en la gestión de seguimiento del proceso de rehabilitación y retorno a la actividad laboral de trabajadores afectados por una enfermedad general, una enfermedad profesional o un accidente de trabajo."
      },

      Calificacion_origen:{
        titulo: "Calificación de origen",
        contenido: "Contamos con peritos especializados en identificar la relación de causalidad de la enfermedad o el accidente, cuyo resultado determinará la entidad responsable del reconocimiento de las prestaciones asistenciales y económicas."
      },

      Calificacion_PCL:{
        titulo: "Calificación de PCL",
        contenido: "Nuestros peritos son expertos en establecer el porcentaje de afectación del conjunto de habilidades, destrezas, aptitudes y/o potencialidades de orden físico, mental y social que posibilitan desempeñarse en un trabajo, el grado de invalidez y la fecha de su estructuración, como consecuencia de un accidente o una enfermedad."
      },

      Auditoria_Incapacidades_Prolongadas:{
        titulo: "Auditoria Incapacidades Prolongadas",
        contenido: "Somos autoexigentes, ordenados y perseverantes. Agregamos un esfuerzo extra para convertir los retos y metas en logros y alcanzar la excelencia como práctica habitual"
      },

      Identificacion_presuntos_Abusos_derecho:{
        titulo: "Identificación presunto Abuso de derecho",
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
