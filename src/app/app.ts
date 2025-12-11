import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/components/header/header";
import { Navbar } from './core/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema-seguranca-operacional-indt');
}
