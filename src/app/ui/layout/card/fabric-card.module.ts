import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricCardComponent } from 'src/app/ui/layout/card/card.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricCardComponent
	],
	exports: [
		FabricCardComponent
	]
})
export class FabricCardModule {
}
