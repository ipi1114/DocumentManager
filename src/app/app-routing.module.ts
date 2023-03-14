import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { DocumentsComponent } from './documents/documents.component';
import { OrgGeneralComponent } from './organisation/org-general/org-general.component';
import { OrgGroupsComponent } from './organisation/org-groups/org-groups.component';
import { OrgIntegrationsComponent } from './organisation/org-integrations/org-integrations.component';
import { OrgPermissionsComponent } from './organisation/org-permissions/org-permissions.component';
import { OrgUsersComponent } from './organisation/org-users/org-users.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { SettingsComponent } from './settings/settings.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboadComponent },
  { path: 'documents', component: DocumentsComponent },
  {
    path: 'organisation',
    component: OrganisationComponent,
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        component: OrgGeneralComponent,
      },
      {
        path: 'groups',
        component: OrgGroupsComponent,
      },
      {
        path: 'integrations',
        component: OrgIntegrationsComponent,
      },
      {
        path: 'permissions',
        component: OrgPermissionsComponent,
      },
      {
        path: 'users',
        component: OrgUsersComponent,
      },
    ],
  },
  { path: 'templates', component: TemplatesComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }