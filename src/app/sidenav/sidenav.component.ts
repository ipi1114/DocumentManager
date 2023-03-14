import { navbarData } from './nav-data';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { SideNavToogle } from './ISideNavToogle';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  @Output() onToogleSideNav: EventEmitter<SideNavToogle> = new EventEmitter()

  screenWidth = 0;
  collapsed = true;
  navData = navbarData;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: 'any') {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToogleSideNav.emit({ collapsed : this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.onToogleSideNav.emit({ collapsed : this.collapsed, screenWidth: this.screenWidth});
  }

  toogleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToogleSideNav.emit({ collapsed : this.collapsed, screenWidth: this.screenWidth});
  }
  
  closeSidenav(): void{
    this.collapsed = false;
    this.onToogleSideNav.emit({ collapsed : this.collapsed, screenWidth: this.screenWidth});
  }
}
