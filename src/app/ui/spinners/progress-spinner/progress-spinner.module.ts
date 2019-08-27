import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerComponent } from 'src/app/ui/spinners/progress-spinner/progress-spinner.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ProgressSpinnerComponent
	],
	exports: [
		ProgressSpinnerComponent
	]
})
export class ProgressSpinnerModule {
}
