import { TestBed } from '@angular/core/testing';

import { AdvisoriesService } from './advisories.service';

describe('AdvisoriesService', () => {
  let service: AdvisoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvisoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
