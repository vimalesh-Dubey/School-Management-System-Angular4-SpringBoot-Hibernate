import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { CallRestApiService } from '../services/call-rest-api.service';
import {Student} from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  showview:boolean=true;
  student: Student = {
    fname: 'vimal',
   lname: 'Windstorm',
   email:'vimal@gmail.com'
  };
  
    name = "vimalesh";
    todaydate;
    studentList = [{fname:'vimal',lname:'dubey',email:'vimaleshd5@gmail.com'},
                   {fname:'ajay',lname:'sharma',email:'ahay123@gmail.com'},
                   {fname:'anil',lname:'pandey',email:'pandey456@gmail.com'}
                  ];
  constructor(private service : CallRestApiService,
              private router : Router) 
              {

               }

  ngOnInit() {
    console.info('Student component initialized ! '+this.name);
    console.info(this.name);
    this.todaydate  = this.service.showTodaydate();
    
    console.log(this.service.serviceName);

   
  }

  processLogin(){
    console.log("login prcessed");
  }

  getstudentDetail(student){
    console.log(student);
    this.showview=false;
    this.router.navigate(["studentdetail"]);
    
  }

}
