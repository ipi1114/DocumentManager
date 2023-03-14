import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgPermissionsComponent } from './org-permissions.component';

describe('OrgPermissionsComponent', () => {
  let component: OrgPermissionsComponent;
  let fixture: ComponentFixture<OrgPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
