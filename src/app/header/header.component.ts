import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() activeComponentName = '';

  constructor() { }

  ngOnInit(): void {
  }

  getHeaderClass(): string {
    let styleClass = '';

    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'head-md-screen'
    }
    return styleClass;
  }
}
