import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterComponent } from './components/scatter/scatter.component';



@NgModule({
  declarations: [
    ScatterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScatterComponent
  ]
})
export class ChartsModule { }
