import { Injectable } from '@angular/core';
import { CallRestApiService } from '../call-rest-api.service';

@Injectable()
export class StudentdetailserviceService {

  constructor(private restService:CallRestApiService) {

   }

   getstudentDatafromFakeJson(){
     console.log('calling studentDetail service');
     return this.restService.callTestApi();
   }

}
