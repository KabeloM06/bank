import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username= new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ])
  name= new FormControl('',[
    Validators.required,
    Validators.minLength(1)
  ])
  surname= new FormControl('',[
    Validators.required,
    Validators.minLength(1)
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
    username: this.username,
    name: this.name,
    surname: this.surname,
    email: this.email ,
    phoneNumber: this.phoneNumber,
    id_number: this.id_number,
    password: this.password,
    confirm_password: this.confirm_password 
})

  register(){
    console.log("form submitted");
  }

}
