import { Component, OnInit } from '@angular/core';
import { orgMenuData } from './orgMenuData';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

  menuData = orgMenuData

  constructor() { }

  ngOnInit(): void {
  }

}
