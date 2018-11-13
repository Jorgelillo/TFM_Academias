import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDocenteComponent } from './detalles-docente.component';

describe('DetallesDocenteComponent', () => {
  let component: DetallesDocenteComponent;
  let fixture: ComponentFixture<DetallesDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
