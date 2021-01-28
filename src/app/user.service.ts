import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userList = 
   [
    {name: 'olcay', group: {title: 'Group A', permissions: ['Admin']}, permissions: [{title: 'test'}]},
   ];


   getUser() {
     return this.userList;
   }

   addUser(name: string, group: any, permissions: any) {
    const pos = this.userList.findIndex((user) => {
      return user.name === name;
    });

    if(pos !== -1) {
      return;
    }
    const newUser = {name: name, group: group, permissions: permissions};
    this.userList.push(newUser);
  }

  deleteUser(name: string) {
    const pos = this.userList.findIndex((user) => {
      return user.name === name
    })

    this.userList.splice(pos, 1);

  }


}
