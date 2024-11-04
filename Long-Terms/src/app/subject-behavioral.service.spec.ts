import { TestBed } from '@angular/core/testing';

import { SubjectBehavioralService } from './subject-behavioral.service';

describe('SubjectBehavioralService', () => {
  let service: SubjectBehavioralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectBehavioralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
