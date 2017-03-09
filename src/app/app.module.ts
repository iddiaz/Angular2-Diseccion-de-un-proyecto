import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrandDirective } from './directives/brand.directive';
import { HighlightDirective  } from './directives/hight-light.directive';
import { AttrdirectiveDirective } from './directives/attrdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandDirective,
    HighlightDirective,
    AttrdirectiveDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
