import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../model/student';
import { StudentdetailserviceService } from '../services/studentdetailservice/studentdetailservice.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {

  @Input()
  student:Student;

  response:JSON;
  
  constructor(private studentdetailservice:StudentdetailserviceService) { }

  ngOnInit() {
    console.log('inside studentdetail component to call service');
  this.studentdetailservice.getstudentDatafromFakeJson().subscribe(res => {
    console.log(res);
    this.response = res.json();
    // if(res) {
    //   if(res.message == "successfully fetch") {
    //     this.isTextAvailable = true;
    //     this.text = res.text;
    //   } else {
    //     this.openSnackBar("Grabbing content unsucessful","Okay");
    //   }
    // }
  },
  error => {
    console.log('error in fetching data');
    //this.openSnackBar("Grabbing content unsucessful","Okay");
  }
);
  

}    

}
