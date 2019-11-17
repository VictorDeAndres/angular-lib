import { TestBed } from '@angular/core/testing';

import { CircularMeasuresService } from './circular-measures.service';

describe('CircularMeasuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CircularMeasuresService = TestBed.get(CircularMeasuresService);
    expect(service).toBeTruthy();
  });
});
