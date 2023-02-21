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
    email= new FormControl('')
  phoneNumber= new FormControl('')
  id_number= new FormControl('')
  password= new FormControl('')
  confirm_password= new FormControl('')
  

  registerForm = new FormGroup({
    name: this.name,
    email: this.email ,
    phoneNumber: this.phoneNumber,
    id_number: this.id_number,
    password: this.password,
    confirm_password: this.confirm_password 
})}
