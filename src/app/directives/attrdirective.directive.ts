import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttrdirective]',

})
export class AttrdirectiveDirective {

//Renderer te permite el renderizado en el DOM del elemento
  constructor( private el: ElementRef, private renderer: Renderer ) {

    renderer.setElementStyle( el.nativeElement, 'color', '#F99D45');
    renderer.setElementStyle( el.nativeElement, 'textDecoration', 'underline');
    renderer.setElementClass(el.nativeElement, 'directiva', true);
   }

    @HostListener('mouseenter') onMouseEnter() {
      this.brandEvent('#EEE456', false);
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.brandEvent(null, false);
    }

    @HostListener('click') onClick() {
      this.brandEvent('cyan', true);
    }

    private brandEvent(color: string, underline: boolean) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
      underline 
        ? this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', 'underline') 
        : this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', '');
    }

}
