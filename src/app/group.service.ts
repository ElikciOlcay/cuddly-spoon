import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  private groupList = 
   [
    {title: 'Super Group', permissions: ['developer', 'admin']},
   ];

   getGroups() {
     return this.groupList;
   }

   getSingleGroup(title: string) {
     return this.groupList.filter((group) => {
       return group.title === title;
     })
   }

   addGroup(title: string, permissions: Array<string>) {
    const pos = this.groupList.findIndex((group) => {
      return group.title === title;
    });

    if(pos !== -1) {
      return;
    }
    const newGroup = {title: title, permissions: permissions};
    this.groupList.push(newGroup);
  }






}
