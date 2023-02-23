import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name= new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])
    email= new FormControl('',[
      Validators.required,
      Validators.email
    ])
  phoneNumber= new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])
  id_number= new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])
  password= new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password= new FormControl('',[
    Validators.required
  ])
  

  registerForm = new FormGroup({
    name: this.name,
    email: this.email ,
    phoneNumber: this.phoneNumber,
    id_number: this.id_number,
    password: this.password,
    confirm_password: this.confirm_password 
})}
