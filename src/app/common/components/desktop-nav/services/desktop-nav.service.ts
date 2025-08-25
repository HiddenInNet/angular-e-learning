import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DesktopNavService {
  isNavOpen: WritableSignal<boolean> = signal(false);

  toggleNav(): void {
    this.isNavOpen.update((open) => !open);
  }

  setNav(open: boolean): void {
    this.isNavOpen.set(open);
  }
}
