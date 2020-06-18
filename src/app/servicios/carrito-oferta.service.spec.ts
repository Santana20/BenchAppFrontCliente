import { TestBed } from '@angular/core/testing';

import { CarritoOfertaService } from './carrito-oferta.service';

describe('CarritoOfertaService', () => {
  let service: CarritoOfertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoOfertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
