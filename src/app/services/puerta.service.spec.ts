import { TestBed, inject } from '@angular/core/testing';

import { PuertaService } from './puerta.service';

describe('PuertaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuertaService]
    });
  });

  it('should be created', inject([PuertaService], (service: PuertaService) => {
    expect(service).toBeTruthy();
  }));
});
