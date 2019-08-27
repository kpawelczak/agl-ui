import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule } from './buttons-indicators/badge/badge.module';
import { ButtonModule } from './buttons-indicators/button/button.module';
import { ButtonGroupModule } from './buttons-indicators/button-group/button-group.module';
import { CardModule } from './layout/card/card.module';
import { CheckboxModule } from './form/checkbox/checkbox.module';
import { ChipModule } from './buttons-indicators/chip/chip.module';
import { DropdownModule } from './form/modals/dropdown/dropdown.module';
import { RadioButtonModule } from './form/radio-button/radio-button.module';
import { RadioGroupModule } from './form/radio-group/radio-group.module';
import { TabModule } from './navigation/tab/tab.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { ProgressSpinnerModule } from './spinners/progress-spinner/progress-spinner.module';
import { SelectModule } from './form/modals/select/select.module';
import { SpinnerModule } from './spinners/spinner/spinner.module';
import { ToggleButtonModule } from './buttons-indicators/toggle-button/toggle-button.module';
import { ToggleButtonGroupModule } from './buttons-indicators/toggle-button-group/toggle-button-group.module';
import { InputModule } from './form/input/input.module';


const modules = [
	BadgeModule,
	ButtonModule,
	ButtonGroupModule,
	CardModule,
	CheckboxModule,
	ChipModule,
	DropdownModule,
	RadioButtonModule,
	RadioGroupModule,
	TabModule,
	ProgressBarModule,
	ProgressSpinnerModule,
	SelectModule,
	SpinnerModule,
	ToggleButtonModule,
	ToggleButtonGroupModule,
	InputModule
];

@NgModule({
	imports: [
		CommonModule,
		...modules
	],
	exports: [
		...modules
	]
})
export class SimpleUIModule {
}
