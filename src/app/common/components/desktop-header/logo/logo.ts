import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [MatIconModule, MatBadgeModule, RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {}
