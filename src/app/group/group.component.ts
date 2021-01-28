import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groupService: GroupService;
  permissionService: PermissionService;

  permissions: any;

  constructor(groupService: GroupService, permissionService: PermissionService) { 
    this.groupService = groupService;
    this.permissionService = permissionService;
  }

  ngOnInit(): void {
    this.permissions = this.permissionService.getPermissions();
  }


  onSubmit(submittedForm: any) { 
    if(submittedForm.invalid) {
      return
    }
    this.groupService.addGroup(submittedForm.value.title, submittedForm.value.permission);
  }

}
