import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabricChipModule } from './chip/fabric-chip.module';
import { FabricBadgeModule } from './badge/fabric-badge.module';
import { FabricButtonModule } from './button/fabric-button.module';

@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,
    FabricChipModule,
    FabricBadgeModule,
    FabricButtonModule
  ],
  exports: [
    FabricChipModule,
    FabricBadgeModule,
    FabricButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
