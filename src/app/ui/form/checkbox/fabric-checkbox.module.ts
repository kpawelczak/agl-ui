import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricCheckboxComponent } from 'src/app/ui/form/checkbox/checkbox.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricCheckboxComponent
	],
	exports: [
		FabricCheckboxComponent
	]
})
export class FabricCheckboxModule {
}
