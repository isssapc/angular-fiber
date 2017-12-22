import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarLineaPuertaDialogoComponent } from './asignar-linea-puerta-dialogo.component';

describe('AsignarLineaPuertaDialogoComponent', () => {
  let component: AsignarLineaPuertaDialogoComponent;
  let fixture: ComponentFixture<AsignarLineaPuertaDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarLineaPuertaDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarLineaPuertaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
