import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/app-common/models/user.model';

import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-org-users',
  templateUrl: './org-users.component.html',
  styleUrls: ['./org-users.component.scss']
})
export class OrgUsersComponent implements OnInit, AfterViewInit {

  roleClassesMap = new Map<string, string>();
  roleStyleClasses = ['role-chip-s1', 'role-chip-s2', 'role-chip-s3', 'role-chip-s4'];

  public displayedColumns = ['Name', 'Roles', 'Status'];
  public dataSource = new MatTableDataSource<UserModel>([]);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.getAllUsers();
  }


  public getAllUsers() {

    this.dataSource.data = [{
      Id: 0, FirstName: "Iurie", LastName: "Potoroaca", UserEmail: "iurie.potoroaca@bento.ro", Status: "Active", ProfileImageURL: "../../../assets/images/user_profile-men.png", Roles: [{ Id:0, RoleName: "Admin" },{ Id:1, RoleName: "Manager" }]
    },
    {
      Id: 0, FirstName: "Marta", LastName: "Miloiu", UserEmail: "marta.miloiu@bento.ro", Status: "Invited", ProfileImageURL: "../../../assets/images/user_profile-women.png", Roles: [{ Id:0, RoleName: "Admin" }]
    },
    {
      Id: 0, FirstName: "Fred", LastName: "Lapusnaru", UserEmail: "fred.lapusnaru@bento.ro", Status: "Inactive", ProfileImageURL: "../../../assets/images/user_profile-men.png", Roles: [{ Id:0, RoleName: "Manager" },{ Id:0, RoleName: "Auditor" },{ Id:0, RoleName: "Financial" },{ Id:0, RoleName: "Role 3" },{ Id:0, RoleName: "Role 4" }]
    }]

    this.dataSource.sort = this.sort;

    this.mapRolesStyleClasses();
  }

  public mapRolesStyleClasses(){

    this.dataSource.data.forEach(user => {
      user.Roles.forEach(role => {
        if(this.roleClassesMap.has(role.RoleName)){
          ;// do nothing
        }else{
          var cCount = this.roleClassesMap.size;

          if(cCount < this.roleStyleClasses.length){
            this.roleClassesMap.set(role.RoleName, this.roleStyleClasses[cCount]);
          }
        }
      });
    });

    console.log(this.roleClassesMap);
  }

  public getUserRoleChipClass(roleName: string) : string{
    return this.roleClassesMap.get(roleName)!;
  }

}
