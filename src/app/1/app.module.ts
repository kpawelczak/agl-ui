import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChipComponent } from './chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
   
    
  ],
  imports: [
    BrowserModule,
    
  ],
  exports: [
    ChipComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
