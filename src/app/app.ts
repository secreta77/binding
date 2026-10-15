import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Main,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('biding1');
}
