import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2 appBrand>Directivas y Eventos en DOM</h2>
    <p appAttrdirective> Elemento personalizado a través de una directiva<p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
