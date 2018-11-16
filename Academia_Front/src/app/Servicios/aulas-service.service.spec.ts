import { TestBed } from '@angular/core/testing';

import { AulasServiceService } from './aulas-service.service';

describe('AulasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AulasServiceService = TestBed.get(AulasServiceService);
    expect(service).toBeTruthy();
  });
});
