import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricButtonGroupComponent } from 'src/app/ui/buttons-indicators/button-group/button-group.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricButtonGroupComponent
	],
	exports: [
		FabricButtonGroupComponent
	]
})
export class FabricButtonGroupModule {
}
