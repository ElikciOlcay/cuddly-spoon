import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userService: UserService;

  constructor(userService: UserService) { 
    this.userService = userService;
  }

  @Input() user: any;

  ngOnInit(): void {
  }

  deleteUser() {
    this.userService.deleteUser(this.user.name);
  }


}
