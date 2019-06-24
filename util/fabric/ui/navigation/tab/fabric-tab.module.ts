import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricTabComponent } from 'util/fabric/ui/navigation/tab/tab.component';
import { TabItemComponent } from 'util/fabric/ui/navigation/tab/tab-item/tab-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricTabComponent,
    TabItemComponent
  ],
  exports: [
    FabricTabComponent,
    TabItemComponent
  ]
})
export class FabricTabModule {
}
