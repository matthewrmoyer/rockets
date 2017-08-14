import { TestBed, inject } from '@angular/core/testing';

import { LaunchesService } from './launches.service';

describe('LaunchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaunchesService]
    });
  });

  it('should be created', inject([LaunchesService], (service: LaunchesService) => {
    expect(service).toBeTruthy();
  }));
});
