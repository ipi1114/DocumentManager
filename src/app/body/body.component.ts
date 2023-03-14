import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  @Output() onComponentChange: EventEmitter<string> = new EventEmitter()

  activeComponent = '';

  constructor() { }

  ngOnInit(): void {
  }

  getBodyClass(): string {
    let styleClass = '';

    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  onActivate(event: any): void {
    console.log(event.constructor.name);
    this.activeComponent = event.constructor.name.replace("Component", "");

    this.onComponentChange.emit(this.activeComponent);
  }

}
