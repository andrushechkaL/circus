import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }


  registerUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#usernamereg').value;
    const password = target.querySelector('#passwordreg').value;

    this.Auth.getUserDetails(username,password, "registr");

  }

}
