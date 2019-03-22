import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabricModule } from 'util/fabric/ui/fabric.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FabricModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
