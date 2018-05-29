import { TestBed, inject } from '@angular/core/testing';

import { StudentdetailserviceService } from './studentdetailservice.service';

describe('StudentdetailserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentdetailserviceService]
    });
  });

  it('should be created', inject([StudentdetailserviceService], (service: StudentdetailserviceService) => {
    expect(service).toBeTruthy();
  }));
});
