import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { BodyComponent } from './template/body/body.component';

import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';



@NgModule({
  declarations: [
    TemplateComponent,
    BodyComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    BodyComponent,
    FooterComponent,
    TemplateComponent
  ]
})
export class PagesModule { }
