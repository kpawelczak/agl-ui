import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.componet';

import { FabricModule } from 'util/fabric/ui/fabric.module';
import { HighlightModule } from './prism/highlight.module';


@NgModule({
	imports: [
		BrowserModule,
		FabricModule,
		HighlightModule
	],
	declarations: [
		AppComponent,
		AppHeaderComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
