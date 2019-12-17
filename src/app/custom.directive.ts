import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {MainMenuComponent} from "./main-menu/main-menu.component";

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element :ElementRef, private render :Renderer2, private  menu:MainMenuComponent) { }


  @HostListener('click') click(){
    const elementRef = this.element.nativeElement;
    if (elementRef.title==="addhotel"){
      this.menu.getAdd();
    }

  }

  ngOnInit(){

     /*const elementRef = this.element.nativeElement;*/
  }
}
