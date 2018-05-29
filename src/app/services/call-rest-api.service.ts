import { Injectable } from '@angular/core';
import {Http,Headers,HttpModule,Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CallRestApiService {

  serviceName='here is my first service';

  constructor(private  http:Http) {  
    console.log("Rest api service called");
  }

   showTodaydate(){
     let ndate = new Date();
     return ndate;
   }

   callTestApi(){
     console.log("calling rest api");
    return this.http.get('http://jsonplaceholder.typicode.com/users/2');
      //.map((res:Response) =>console.log(res)).toArray
     // .catch((error:any) => Observable.throw(error.json() || 'Server error getting login data'))
      
   }
  

}
