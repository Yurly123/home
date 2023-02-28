import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickerComponent } from './clicker.component';
import { ClickerGameModule } from '@web/games';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClickerComponent],
  imports: [CommonModule, ClickerGameModule, RouterModule.forChild([{ path: 'clicker', component: ClickerComponent }])],
  exports: [ClickerComponent],
})
export class ClickerModule { }
