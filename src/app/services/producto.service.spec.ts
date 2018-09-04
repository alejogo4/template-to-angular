import { TestBed, inject } from '@angular/core/testing';

import { ProductoService } from './producto.service';

describe('ProductoServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoService]
    });
  });

  it('should be created', inject([ProductoService], (service: ProductoService) => {
    expect(service).toBeTruthy();
  }));
});
