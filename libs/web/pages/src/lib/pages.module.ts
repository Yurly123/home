import { NgModule } from '@angular/core';
import { MainModule } from './main';
import { LocalhostModule } from './localhost';

@NgModule({
  exports: [MainModule, LocalhostModule],
})
export class PagesModule { }
