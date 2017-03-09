import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective  {

  constructor(private el: ElementRef) { }

  //se puede establecer un alias para la directiva declarado en el input y así esta propiedad se conoce con el nombre de la directiva por lo que se puede trabajar con nombres más idoneos acorde a la funcionalidad que presente la diretiva.
  @Input('myHighlight') colorResaltado: string;

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.colorResaltado || 'green');
    }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
}
