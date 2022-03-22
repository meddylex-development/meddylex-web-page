import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styles: [
  ]
})
export class NosotrosComponent {

  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }

  innovacion : AnimationOptions = {
    path : 'assets/lottie/3. Innovacion.json'
  }

  piramide : AnimationOptions = {
    path : 'assets/lottie/4. Piramide.json'
  }

  mision : AnimationOptions = {
    path : 'assets/lottie/5. Mision.json'
  }

  vision : AnimationOptions = {
    path : 'assets/lottie/6. Vision.json'
  }


  dropdown_classV:string = "valores-dropdown desactivado";
  dropdown_classP:string = "valores-dropdown desactivado";

  dropDownVState:boolean = false;
  dropDownPState:boolean = false;
  dropDownTitle : string = "";
  dropDownContent : string = "";

  valores: any = 
    { 
      
      solidaridad:{
        titulo: "solidaridad - TEXTO SLT",
        contenido : "Entendemos que el interés común prevalece sobre el particular, nos adherimos a los principios de desarrollo sostenible, estamos dispuestos a colaborar con los demás por el beneficio común, y obramos en consecuencia"
      },

      respeto:{
        titulo : "Respeto - TEXTO SLT",
        contenido : "Nos situamos en el lugar del otro, lo escuchamos, lo valoramos y somos receptivos a sus necesidades, haciendo de la armonía y confianza las bases fundamentales de nuestras relaciones"
      },

      integridad:{
        titulo: "Integridad - TEXTO SLT",
        contenido: "Actuamos con honestidad, lealtad y franqueza. Hacemos lo que decimos y cumplimos nuestros compromisos"
      },

      disciplina:{
        titulo: "Disciplina - TEXTO SLT",
        contenido: "Somos autoexigentes, ordenados y perseverantes. Agregamos un esfuerzo extra para convertir los retos y metas en logros y alcanzar la excelencia como práctica habitual"
      }


    }
  
  principios: any = 
    { 
      
      conocimiento:{
        titulo: "Conocimiento en acción",
        contenido : "Tenemos la convicción que hay que aprender a pensar para saber hacer. Sabemos que para operar y mejorar la realidad no basta con concebir teorías, hay que resolver problemas aplicando el conocimiento y usando la tecnología"
      },

      innovacion:{
        titulo : "Innovación social",
        contenido : "Para nosotros lo único permanente es el cambio. Creemos que si podemos soñarlo podemos hacerlo. Nos atrevemos a pensar diferente, recorrer distintos rumbos, crear colectivamente y trabajar en colaboración para crear valor para la sociedad, los consumidores, los clientes y la empresa"
      },

      seguridad:{
        titulo: "Seguridad",
        contenido: "Estamos comprometidos en garantizar que nuestros servicios se ejecuten con altos estándares que prevengan y minimicen los riesgos y protejan a los integrantes de la cadena de valor en la que participamos"
      },

      confidencialidad:{
        titulo: "Confidencialidad",
        contenido: "Respetamos y protegemos la privacidad con políticas estrictas y tecnologías con estándares de alta seguridad"
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
  activarDropDownP(codigo : string){

    if(!this.dropDownPState){

      this.dropdown_classP = "principios-dropdown"
      this.dropdown_classV += " desactivado";

      const opcion = this.principios[codigo];
      const {titulo,contenido} = opcion;

      this.dropDownTitle = titulo;
      this.dropDownContent = contenido;

      
      this.dropDownPState = true;
      this.dropDownVState = false;
      
    }else{

      this.dropdown_classV += " desactivado";

      const opcion = this.principios[codigo];
      const {titulo,contenido} = opcion;
      
      this.dropDownVState = false;
      this.dropDownTitle = titulo;
      this.dropDownContent = contenido;
      
    }

    

    
  }
  

}
