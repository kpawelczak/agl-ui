import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.componet';

import { SimpleUIModule } from 'src/app/ui/simple-ui.module';
import { HighlightModule } from './prism/highlight.module';
import { DialogExample } from './examples/dialog/dialog-example.component';
import { InlineDialogExample } from './examples/dialog/inline-dialog-example.component';


@NgModule({
	imports: [
		BrowserModule,
		SimpleUIModule,
		HighlightModule
	],
	declarations: [
		AppComponent,
		AppHeaderComponent,
		DialogExample,
		InlineDialogExample
	],
	entryComponents: [
		DialogExample,
		InlineDialogExample
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
