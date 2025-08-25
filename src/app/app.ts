import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopHeader } from './common/components/desktop-header/desktop-header';
import { DesktopNav } from './common/components/desktop-nav/desktop-nav';
import { DesktopNavService } from './common/components/desktop-nav/services/desktop-nav.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopHeader, DesktopNav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('e-learning');
  readonly _desktopNavService = inject(DesktopNavService);

  get isNavOpen(): boolean {
    return this._desktopNavService.isNavOpen();
  }
}
