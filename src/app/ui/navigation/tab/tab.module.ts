import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from 'src/app/ui/navigation/tab/tab.component';
import { TabItemComponent } from 'src/app/ui/navigation/tab/tab-item/tab-item.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		TabComponent,
		TabItemComponent
	],
	exports: [
		TabComponent,
		TabItemComponent
	]
})
export class TabModule {
}
