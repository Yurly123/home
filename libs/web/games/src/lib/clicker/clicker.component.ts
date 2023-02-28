import { Component, ElementRef, OnInit } from '@angular/core';
import { Application } from 'pixi.js';

@Component({
  selector: 'home-game-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss'],
})
export class ClickerGameComponent implements OnInit {
  constructor(
    private readonly elementRef: ElementRef<HTMLElement>
  ) { }

  ngOnInit(): void {
    const canvas = this.elementRef.nativeElement.querySelector('canvas#game-canvas')
    const app = new Application({
      view: canvas as HTMLCanvasElement,
      width: window.screen.width / 1.5,
      height: window.screen.height / 1.5,
    })
  }
}