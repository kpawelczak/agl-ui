import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.componet';

import { SimpleUIModule } from 'src/app/ui/simple-ui.module';
import { HighlightModule } from './prism/highlight.module';


@NgModule({
	imports: [
		BrowserModule,
		SimpleUIModule,
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
