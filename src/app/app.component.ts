import { Component } from '@angular/core';
import { CallRestApiService } from './services/call-rest-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchoolManagementSystem';
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  todaydate;

  myClickFunction(event){
    alert("button clicked");
    console.log(event);
  }

  changeMonths(event){
    alert("month changed");
    console.log(event);
  }

  constructor(private myservice: CallRestApiService) {}
   ngOnInit() {
      this.todaydate = this.myservice.showTodaydate();
      this.myservice.serviceName = "service name has been changed";
      
   }
}
