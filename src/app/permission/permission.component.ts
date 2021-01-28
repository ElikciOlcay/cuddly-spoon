import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permissionService: PermissionService;

  constructor(permissionService: PermissionService) { 
    this.permissionService = permissionService;
  }

  ngOnInit(): void {
  }

  onSubmit(submittedForm: any) {
    if(submittedForm.invalid) {
      return
    }
    this.permissionService.addPermission(submittedForm.value.title);
  }

}
