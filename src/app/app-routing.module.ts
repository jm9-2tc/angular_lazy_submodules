import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'submodule-a', loadChildren: () => import('./submodule-a/submodule-a.module').then(m => m.SubmoduleAModule) }, { path: 'submodule-b', loadChildren: () => import('./submodule-b/submodule-b.module').then(m => m.SubmoduleBModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
