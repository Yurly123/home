import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main').then(m => m.MainModule)
  },
  {
    path: 'localhost',
    loadChildren: () => import('./localhost').then(m => m.LocalhostModule)
  },
  {
    path: 'clicker',
    loadChildren: () => import('./clicker').then(m => m.ClickerModule)
  },
]
