import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  private permissions = 
   [
    {title: 'admin'}
   ];

   getPermissions() {
     return this.permissions;
   }

   getSinglePermission(title: string) {
     let permissionTEst: any[] = []; 
     permissionTEst.push(this.permissions.find((permission) => {
      return permission.title === title;
    }))
    return permissionTEst[0];
   }

   addPermission(title: string) {
    const pos = this.permissions.findIndex((permission) => {
      return permission.title === title;
    });

    if(pos !== -1) {
      return;
    }
    const newPermission = {title: title};
    this.permissions.push(newPermission);
   }


}
