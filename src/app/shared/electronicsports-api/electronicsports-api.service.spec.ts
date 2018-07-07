import { TestBed, inject } from '@angular/core/testing';

import { ElectronicsportsApiService } from './electronicsports-api.service';

describe('ElectronicsportsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronicsportsApiService]
    });
  });

  it('should be created', inject([ElectronicsportsApiService], (service: ElectronicsportsApiService) => {
    expect(service).toBeTruthy();
  }));
});
