import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SubmoduleARoutingModule } from './submodule-a-routing.module';
import { SubmoduleAComponent } from './submodule-a.component';
import { TextParagraphComponent } from './text-paragraph/text-paragraph.component';
import { SampleMenuComponent } from './sample-menu/sample-menu.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SubmoduleAComponent,
    TextParagraphComponent,
    SampleMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubmoduleARoutingModule,
    SharedModule
  ]
})
export class SubmoduleAModule {
  constructor() {
    console.log('Loaded module A')
  }
}
