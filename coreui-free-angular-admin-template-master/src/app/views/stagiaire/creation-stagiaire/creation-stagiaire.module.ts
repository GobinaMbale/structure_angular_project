import { NgModule } from '@angular/core';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule} from '@angular/forms';
import {CreationStagiaireComponent} from './creation-stagiaire.component';
import {CreationStagiaireRoutingModule} from './creation-stagiaire-routing.module';

@NgModule({
  imports: [
    CreationStagiaireRoutingModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [ CreationStagiaireComponent]
})
export class CreationStagiaireModule { }
