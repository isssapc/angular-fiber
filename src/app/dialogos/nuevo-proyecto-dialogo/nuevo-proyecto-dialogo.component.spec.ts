import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProyectoDialogoComponent } from './nuevo-proyecto-dialogo.component';

describe('NuevoProyectoDialogoComponent', () => {
  let component: NuevoProyectoDialogoComponent;
  let fixture: ComponentFixture<NuevoProyectoDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoProyectoDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoProyectoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
