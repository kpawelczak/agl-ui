import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip.component';
import './chip.scss';
@NgModule({
  declarations: [
    
    ChipComponent,
      
  ],
  imports: [
    CommonModule
  ],
 

  exports: [
    ChipComponent,
  ],
 
})
export class FabricChipModule { }
