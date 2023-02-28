import { NgModule } from '@angular/core';
import { MainModule } from './main';
import { LocalhostModule } from './localhost';
import { ClickerModule } from './clicker';

@NgModule({
  exports: [MainModule, LocalhostModule, ClickerModule],
})
export class PagesModule { }
