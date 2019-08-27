import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricInputComponent } from 'src/app/ui/form/input/input.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricInputComponent
	],
	exports: [
		FabricInputComponent
	]
})
export class FabricInputModule {
}
