import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopHeader } from './common/components/desktop-header/desktop-header';
import { DesktopNav } from './common/components/desktop-nav/desktop-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopHeader, DesktopNav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('e-learning');

  isNavOpen = false;

  onSidebarToggled(isOpen: Event): void {
    this.isNavOpen = isOpen.isTrusted;
    console.log('Sidebar abierto:', this.isNavOpen);
    // Aquí puedes ajustar el contenido principal según el sidebar
  }
}
