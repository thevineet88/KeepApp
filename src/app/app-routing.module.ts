import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeepComponent } from './keep/keep.component';

const routes: Routes = [
  {
    path : 'keep' , component : KeepComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
