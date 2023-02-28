import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalhostComponent } from './localhost.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LocalhostComponent],
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, RouterModule.forChild([{ path: '', component: LocalhostComponent }])],
  exports: [LocalhostComponent],
})
export class LocalhostModule { }
