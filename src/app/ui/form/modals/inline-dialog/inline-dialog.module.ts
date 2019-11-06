import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineDialogComponent } from './inline-dialog.component';
import { InlineDialogService } from './inline-dialog.service';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		InlineDialogComponent
	],
	providers: [
		InlineDialogService
	],
	entryComponents: [
		InlineDialogComponent
	]
})
export class InlineDialogModule {
}
