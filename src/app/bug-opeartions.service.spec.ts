import { TestBed, inject } from '@angular/core/testing';

import { BugOpeartionsService } from './bug-opeartions.service';

describe('BugOpeartionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugOpeartionsService]
    });
  });

  it('should be created', inject([BugOpeartionsService], (service: BugOpeartionsService) => {
    expect(service).toBeTruthy();
  }));
});
