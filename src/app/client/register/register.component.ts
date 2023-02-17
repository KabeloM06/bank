import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    id_number: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    
  })
}