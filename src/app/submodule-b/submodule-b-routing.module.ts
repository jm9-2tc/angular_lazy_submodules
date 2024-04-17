import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmoduleBComponent } from './submodule-b.component';

const routes: Routes = [{ path: '', component: SubmoduleBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmoduleBRoutingModule { }
