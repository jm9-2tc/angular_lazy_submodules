import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmoduleAComponent } from './submodule-a.component';
import { TextParagraphComponent } from './text-paragraph/text-paragraph.component';
import { SampleMenuComponent } from './sample-menu/sample-menu.component';

const routes: Routes = [
  { path: '', component: SubmoduleAComponent },
  { path: 'text', component: TextParagraphComponent },
  { path: 'menu', component: SampleMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmoduleARoutingModule { }
