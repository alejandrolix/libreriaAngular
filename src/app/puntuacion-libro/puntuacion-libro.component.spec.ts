import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuacionLibroComponent } from './puntuacion-libro.component';

describe('PuntuacionLibroComponent', () => {
  let component: PuntuacionLibroComponent;
  let fixture: ComponentFixture<PuntuacionLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntuacionLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntuacionLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
