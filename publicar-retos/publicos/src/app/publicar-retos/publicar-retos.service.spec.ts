import { TestBed, inject } from '@angular/core/testing';

import { PublicarRetosService } from './publicar-retos.service';

describe('PublicarRetosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicarRetosService]
    });
  });

  it('should be created', inject([PublicarRetosService], (service: PublicarRetosService) => {
    expect(service).toBeTruthy();
  }));
});
