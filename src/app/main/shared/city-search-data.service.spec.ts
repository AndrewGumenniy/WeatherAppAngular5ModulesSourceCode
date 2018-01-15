import { TestBed, inject } from '@angular/core/testing';

import { CitySearchDataService } from './city-search-data.service';

describe('CitySearchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitySearchDataService]
    });
  });

  it('should be created', inject([CitySearchDataService], (service: CitySearchDataService) => {
    expect(service).toBeTruthy();
  }));
});
