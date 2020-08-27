import { TestBed } from '@angular/core/testing';

import { ComprobarCodLibroGuard } from './comprobar-cod-libro.guard';

describe('ComprobarCodLibroGuard', () => {
  let guard: ComprobarCodLibroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ComprobarCodLibroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
