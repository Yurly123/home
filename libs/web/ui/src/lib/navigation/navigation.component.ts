import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToolbarItem } from '../../shared';

@Component({
  selector: 'home-ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly location: Location,
  ) { }

  toolbarItems: ToolbarItem[] = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Localhost',
      path: '/localhost',
    }
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.HandsetLandscape, '(orientation: portrait)'])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  changePath(path: string) {
    const url = this.router.parseUrl(path)
    this.router.navigateByUrl(url)
  }
}
