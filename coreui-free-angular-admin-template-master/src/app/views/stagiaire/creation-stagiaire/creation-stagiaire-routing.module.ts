import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreationStagiaireComponent} from './creation-stagiaire.component';

const routes: Routes = [
  {
    path: '',
    component: CreationStagiaireComponent,
    data: {
      title: 'Création d\'un stagiaire'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationStagiaireRoutingModule {}
