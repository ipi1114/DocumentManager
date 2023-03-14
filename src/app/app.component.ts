import { Component } from '@angular/core';
import { SideNavToogle } from './sidenav/ISideNavToogle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docmanager-app';

  isSideNavCollapsed = false;
  screenWidth = 0;

  activeComponent = ''

  onToogleSideNav(data: SideNavToogle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  onComponentChange(data: string): void {
    this.activeComponent = data;
  }
}
