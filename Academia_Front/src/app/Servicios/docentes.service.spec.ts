import { TestBed } from '@angular/core/testing';

import { DocentesService } from './docentes.service';

describe('DocentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocentesService = TestBed.get(DocentesService);
    expect(service).toBeTruthy();
  });
});
