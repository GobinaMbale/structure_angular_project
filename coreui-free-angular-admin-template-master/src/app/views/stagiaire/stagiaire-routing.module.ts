import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StagiaireComponent} from './stagiaire.component';

const routes: Routes = [
  {
    path: '',
    component: StagiaireComponent,
    data: {
      title: 'Stagiaire'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagiaireRoutingModule {}
