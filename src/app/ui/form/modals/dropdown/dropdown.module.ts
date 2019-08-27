import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from 'src/app/ui/form/modals/dropdown/dropdown.component';
import { DropdownItemComponent } from 'src/app/ui/form/modals/dropdown/dropdown-items/dropdown-item.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DropdownComponent,
		DropdownItemComponent
	],
	exports: [
		DropdownComponent,
		DropdownItemComponent
	]
})
export class DropdownModule {
}
