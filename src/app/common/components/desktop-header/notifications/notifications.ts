import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-notifications',
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {}
