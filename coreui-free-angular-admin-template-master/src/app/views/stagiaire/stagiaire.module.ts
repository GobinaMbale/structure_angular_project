import { NgModule } from '@angular/core';

import {StagiaireRoutingModule} from './stagiaire-routing.module';
import {StagiaireComponent} from './stagiaire.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    StagiaireRoutingModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [ StagiaireComponent]
})
export class StagiaireModule { }
