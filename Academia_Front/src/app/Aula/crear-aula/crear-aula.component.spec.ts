import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAulaComponent } from './crear-aula.component';

describe('CrearAulaComponent', () => {
  let component: CrearAulaComponent;
  let fixture: ComponentFixture<CrearAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
