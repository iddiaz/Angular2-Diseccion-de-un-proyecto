
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBrand]',
})
export class BrandDirective {
    
  //ElementRef => Es un servicio que permite el acceso directo al elemento DOM a través de su propiedad nativeElemen, para poder manipularlo directamente.

  /**Input permite pasarle un valor a la directiva definiendo una propiedad */

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#EF997D';
    el.nativeElement.id = 'BrandDIrectiveID';
  }

  //HostListener => permite subscribirse a los eventos del elemento DOM
 @HostListener('mouseenter') onMouseEnter() {
    this.appBrand('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.appBrand('#EF997D');
  }
  private appBrand(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
