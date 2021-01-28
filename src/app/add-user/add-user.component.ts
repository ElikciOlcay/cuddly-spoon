import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { PermissionService } from '../permission.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userService: UserService;
  groupService: GroupService;
  permissionService: PermissionService;
  selectedGroupTitle: any;
  selectedPermissionTitle: any;

  selectedGroup: any;
  selectedPermissions = new Array;

  groups: any;
  permissions: any;
  componentName = 'test';


  constructor(userService: UserService, groupService: GroupService, permissionService: PermissionService) {
    this.userService = userService;
    this.groupService = groupService;
    this.permissionService = permissionService;
  }

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
    this.permissions = this.permissionService.getPermissions();
  }

  onSelectGroup() {
    this.selectedGroup = this.groupService.getSingleGroup(this.selectedGroupTitle);
  }

  onSelectPermission() {
    this.selectedPermissions.push(this.permissionService.getSinglePermission(this.selectedPermissionTitle));
  }

  deletePermission(index: number) {
    this.selectedPermissions.splice(index, 1);
  }
 

  onSubmit(submittedForm: any) {
    if(submittedForm.invalid) {
      return;
    }
    this.userService.addUser(submittedForm.value.name, this.selectedGroup[0], this.selectedPermissions);
    this.selectedGroup = '';
    this.selectedPermissions = [];
    this.selectedGroupTitle = '';
    this.selectedPermissionTitle = '';
  }

}
