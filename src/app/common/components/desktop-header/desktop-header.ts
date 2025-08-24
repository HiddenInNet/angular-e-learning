import { Component } from '@angular/core';
import { Profile } from './profile/profile';
import { Notifications } from './notifications/notifications';
import { Logo } from './logo/logo';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-desktop-header',
  imports: [Profile, Notifications, Logo, SearchBar],
  templateUrl: './desktop-header.html',
  styleUrl: './desktop-header.css',
})
export class DesktopHeader {}
