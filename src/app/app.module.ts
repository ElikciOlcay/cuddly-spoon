import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { PermissionComponent } from './permission/permission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { GroupService } from './group.service';
import { PermissionService } from './permission.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupComponent,
    PermissionComponent,
    AddUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, GroupService, PermissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
