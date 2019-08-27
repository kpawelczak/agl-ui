import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricBadgeModule } from 'src/app/ui/buttons-indicators/badge/fabric-badge.module';
import { FabricButtonModule } from 'src/app/ui/buttons-indicators/button/fabric-button.module';
import { FabricButtonGroupModule } from 'src/app/ui/buttons-indicators/button-group/fabric-button-group.module';
import { FabricCardModule } from 'src/app/ui/layout/card/fabric-card.module';
import { FabricCheckboxModule } from 'src/app/ui/form/checkbox/fabric-checkbox.module';
import { FabricChipModule } from 'src/app/ui/buttons-indicators/chip/fabric-chip.module';
import { FabricDropdownModule } from 'src/app/ui/form/modals/dropdown/fabric-dropdown.module';
import { FabricProgressBarModule } from 'src/app/ui/progress-bar/fabric-progress-bar.module';
import { FabricProgressSpinnerModule } from 'src/app/ui/spinners/progress-spinner/fabric-progress-spinner.module';
import { FabricRadioButtonModule } from 'src/app/ui/form/radio-button/fabric-radio-button.module';
import { FabricRadioGroupModule } from 'src/app/ui/form/radio-group/fabric-radio-group.module';
import { FabricTabModule } from 'src/app/ui/navigation/tab/fabric-tab.module';
import { FabricSelectModule } from 'src/app/ui/form/modals/select/fabric-select.module';
import { FabricSpinnerModule } from 'src/app/ui/spinners/spinner/fabric-spinner.module';
import { FabricToggleButtonModule } from 'src/app/ui/buttons-indicators/toggle-button/fabric-toggle-button.module';
import { FabricToggleButtonGroupModule } from 'src/app/ui/buttons-indicators/toggle-button-group/fabric-toggle-button-group.module';
import { FabricInputModule } from 'src/app/ui/form/input/fabric-input.module';


const modules = [
	FabricBadgeModule,
	FabricButtonModule,
	FabricButtonGroupModule,
	FabricCardModule,
	FabricCheckboxModule,
	FabricChipModule,
	FabricDropdownModule,
	FabricRadioButtonModule,
	FabricRadioGroupModule,
	FabricTabModule,
	FabricProgressBarModule,
	FabricProgressSpinnerModule,
	FabricSelectModule,
	FabricSpinnerModule,
	FabricToggleButtonModule,
	FabricToggleButtonGroupModule,
	FabricInputModule
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
export class FabricModule {
}
