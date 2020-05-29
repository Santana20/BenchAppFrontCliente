import { TestBed } from '@angular/core/testing';

import { ProductoOfertaService } from './producto-oferta.service';

describe('ProductoOfertaService', () => {
  let service: ProductoOfertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoOfertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
