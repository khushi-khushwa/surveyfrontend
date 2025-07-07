import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
  constructor(private fb:FormBuilder, private route:Router ){
      
  }

  notValid: boolean = false;
   loginForm : FormGroup

  ngOnInit(): void {
    
      this.loginForm =  this.fb.group({
        gmail: ['', Validators.required],
        password: ['', Validators.required]
      })


  }


  dashboard(){
    if(this.loginForm.valid){
      const value = this.loginForm.value
     console.log('sdfdsf')
     localStorage.setItem('user', JSON.stringify(value));
     
}
   
    this.route.navigate(['dashboard']);
  }

  
}
