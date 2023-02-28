import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickerGameComponent } from './clicker.component';

@NgModule({
  declarations: [ClickerGameComponent],
  imports: [CommonModule],
  exports: [ClickerGameComponent],
})
export class ClickerGameModule { }
