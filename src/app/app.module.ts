import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabricChipModule } from './chip/fabric-chip.module';
import { FabricBadgeModule } from './badge/fabric-badge.module';

@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,
    FabricChipModule,
    FabricBadgeModule,
  ],
  exports: [
    FabricChipModule,
    FabricBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
