import { TestBed, inject } from '@angular/core/testing';

import { MuebleService } from './mueble.service';

describe('MuebleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuebleService]
    });
  });

  it('should be created', inject([MuebleService], (service: MuebleService) => {
    expect(service).toBeTruthy();
  }));
});
