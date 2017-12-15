import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPuertaDialogoComponent } from './nueva-puerta-dialogo.component';

describe('NuevaPuertaDialogoComponent', () => {
  let component: NuevaPuertaDialogoComponent;
  let fixture: ComponentFixture<NuevaPuertaDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaPuertaDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPuertaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
