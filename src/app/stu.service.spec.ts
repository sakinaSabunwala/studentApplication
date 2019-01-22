import { TestBed } from '@angular/core/testing';

import { StuService } from './stu.service';

describe('StuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StuService = TestBed.get(StuService);
    expect(service).toBeTruthy();
  });
});
