import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAulaComponent } from './detalles-aula.component';

describe('DetallesAulaComponent', () => {
  let component: DetallesAulaComponent;
  let fixture: ComponentFixture<DetallesAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
