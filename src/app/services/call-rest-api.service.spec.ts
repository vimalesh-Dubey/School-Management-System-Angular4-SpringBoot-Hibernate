import { TestBed, inject } from '@angular/core/testing';

import { CallRestApiService } from './call-rest-api.service';

describe('CallRestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallRestApiService]
    });
  });

  it('should be created', inject([CallRestApiService], (service: CallRestApiService) => {
    expect(service).toBeTruthy();
  }));
});
