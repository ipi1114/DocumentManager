import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { TemplatesComponent } from './templates/templates.component';
import { SettingsComponent } from './settings/settings.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { DocumentsComponent } from './documents/documents.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { OrgPermissionsComponent } from './organisation/org-permissions/org-permissions.component';
import { OrgIntegrationsComponent } from './organisation/org-integrations/org-integrations.component';
import { OrgGroupsComponent } from './organisation/org-groups/org-groups.component';
import { OrgUsersComponent } from './organisation/org-users/org-users.component';
import { OrgGeneralComponent } from './organisation/org-general/org-general.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboadComponent,
    TemplatesComponent,
    SettingsComponent,
    OrganisationComponent,
    DocumentsComponent,
    HeaderComponent,
    OrgPermissionsComponent,
    OrgIntegrationsComponent,
    OrgGroupsComponent,
    OrgUsersComponent,
    OrgGeneralComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
