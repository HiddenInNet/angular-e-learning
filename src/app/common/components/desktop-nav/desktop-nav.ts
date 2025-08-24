import { Component, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desktop-nav',
  imports: [RouterLink, MatIconModule, MatBadgeModule],
  templateUrl: './desktop-nav.html',
  styleUrl: './desktop-nav.css',
})
export class DesktopNav {
  private readonly eRef = inject(ElementRef);
  isExpanded = false;
  showLabels = false;
  @Output()
  readonly sidebarToggled = new EventEmitter<boolean>();

  toggleNav(): void {
    if (this.isExpanded) {
      this.isExpanded = false;
      this.showLabels = false;
    } else {
      this.isExpanded = true;
      setTimeout(() => {
        this.showLabels = true;
      }, 300);
    }
    this.sidebarToggled.emit(this.isExpanded);
  }

  // Detectar click en cualquier parte del documento
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.isExpanded && !this.eRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
      this.showLabels = false;
      this.sidebarToggled.emit(this.isExpanded);
    }
  }

  navTabs = [
    {
      title: 'Home',
      icon: 'home',
      navigateTo: 'home',
      notifications: 19,
    },
    {
      title: 'Mis cursos',
      icon: 'book',
      navigateTo: 'courses',
      notifications: 5,
    },
    {
      title: 'Calendario',
      icon: 'calendar-month',
      navigateTo: 'calendar',
      notifications: 3,
    },
    {
      title: 'Tareas',
      icon: 'list-alt',
      navigateTo: 'tasks',
      notifications: 3,
    },
    {
      title: 'Mensajes',
      icon: 'chat',
      navigateTo: 'chat',
      notifications: 3,
    },
    {
      title: 'Correo',
      icon: 'mail',
      navigateTo: 'mail',
      notifications: 0,
    },
    {
      title: 'Compañeros',
      icon: 'groups',
      navigateTo: 'groups',
      notifications: 3,
    },
    {
      title: 'Calificaciones',
      icon: 'leaderboard',
      navigateTo: 'scores',
      notifications: 3,
    },
    {
      title: 'Configuración',
      icon: 'settings',
      navigateTo: 'settings',
      notifications: 3,
    },
    {
      title: 'Cerrar sesión',
      icon: 'logout',
      navigateTo: 'logout',
    },
  ];
}
