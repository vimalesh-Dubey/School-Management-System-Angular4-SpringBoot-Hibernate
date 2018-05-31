import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData;
  emailid;
  constructor() { }

  ngOnInit() {

    this.formData = new FormGroup({
         emailId:new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
          ])),
          passwd: new FormControl("")
    
    });
  }

  onclickSubmit(data){
        this.emailid = data.emailId;
  }

}
