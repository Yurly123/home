import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickerComponent } from './clicker.component';
import { ClickerGameModule } from '@web/games';

@NgModule({
  declarations: [ClickerComponent],
  imports: [CommonModule, ClickerGameModule],
  exports: [ClickerComponent],
})
export class ClickerModule { }
