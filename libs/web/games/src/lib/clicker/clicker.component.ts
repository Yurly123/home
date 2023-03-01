import { Component, ElementRef, OnInit } from '@angular/core';
import { Application, BitmapFont, BitmapText, Container, Sprite, ICanvas } from 'pixi.js';

@Component({
  selector: 'home-game-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss'],
})
export class ClickerGameComponent implements OnInit {
  constructor(
    private readonly elementRef: ElementRef<HTMLElement>
  ) { }

  app: Application<ICanvas> = new Application()
  canvasWidth: number = window.screen.width / 1.5
  canvasHeight: number = window.screen.height / 1.5
  clicks = -1
  clicksText?: BitmapText

  ngOnInit(): void {
    this.initalizeApp()
    this.loadFonts()
    this.loadStage()
  }

  initalizeApp() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas#game-canvas')
    this.app = new Application({
      view: canvas as HTMLCanvasElement,
      width: this.canvasWidth,
      height: this.canvasHeight,
      backgroundColor: 'white'
    })
  }
  loadFonts() {
    BitmapFont.from('score', {
      fontSize: 40
    })
  }
  loadStage() {
    const container = new Container()
    this.clicksText = new BitmapText('', { fontName: 'score' })
    this.clicksText.anchor.set(0.5)
    this.clicksText.x = this.canvasWidth / 2
    this.clicksText.y = 40
    this.addClicks()
    container.addChild(this.clicksText)
    const button = Sprite.from('assets/games/clicker/button.png')
    button.anchor.set(0.5)
    button.x = this.canvasWidth / 2
    button.y = this.canvasHeight / 2
    button.height = Math.min(this.canvasWidth, this.canvasHeight) / 2
    button.width = button.height / 0.75
    setInterval(() => button.angle++, 10);
    container.addChild(button)
    this.app.stage.addChild(container)
  }

  addClicks() {
    this.clicks++
    if (this.clicksText)
      this.clicksText.text = `Clicked ${this.clicks} times`
  }
}
