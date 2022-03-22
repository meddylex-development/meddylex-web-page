import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  @ViewChild('mobile_menu') mobile_menu !: ElementRef;
  @ViewChild('open') open !: ElementRef;
  @ViewChild('close') close !: ElementRef;
  
  logo : AnimationOptions = {
    path : 'assets/lottie/mountain/data.json'
  }

  burgerButton(){
    this.render.addClass(this.mobile_menu.nativeElement,'slide-in-right');
    this.render.addClass(this.open.nativeElement,'pulsate-fwd');
  
    this.render.removeClass(this.mobile_menu.nativeElement,'slide-out-right');
    this.render.removeClass(this.close.nativeElement,'pulsate-fwd');
  
  }

  closeMenuButton(){
    
    this.render.addClass(this.mobile_menu.nativeElement,'slide-out-right');
    this.render.addClass(this.close.nativeElement,'pulsate-fwd');

    this.render.removeClass(this.open.nativeElement,'pulsate-fwd');
  }

  constructor(private render: Renderer2){}

}
