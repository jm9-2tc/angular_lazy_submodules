import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmoduleBRoutingModule } from './submodule-b-routing.module';
import { SubmoduleBComponent } from './submodule-b.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SubmoduleBComponent
  ],
  imports: [
    CommonModule,
    SubmoduleBRoutingModule,
    SharedModule
  ]
})
export class SubmoduleBModule {
  constructor() {
    console.log('Loaded module B')
  }
}
