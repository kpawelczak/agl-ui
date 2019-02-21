import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabricChipModule } from './chip/fabric-chip.module'

@NgModule({
  declarations: [
    AppComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    FabricChipModule
  ],
  exports: [
    FabricChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
