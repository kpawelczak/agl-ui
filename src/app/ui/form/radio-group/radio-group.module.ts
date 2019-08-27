import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioGroupComponent } from 'src/app/ui/form/radio-group/radio-group.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		RadioGroupComponent
	],
	exports: [
		RadioGroupComponent
	]
})
export class RadioGroupModule {
}
