import { UserRole } from "./user.role";

export class UserModel {
  Id: number;
  FirstName: string;
  LastName: string;
  UserEmail: string;
  Roles: UserRole[];
  Status: string;
  ProfileImageURL: string;
}