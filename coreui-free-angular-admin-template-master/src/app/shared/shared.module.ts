import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [SharedLibsModule
  ],
  declarations: [],
  entryComponents: [
  ],
  exports: [
    SharedLibsModule,
    NgxSpinnerModule,
  ],
})
export class SharedModule { }
