import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoListaComponent } from './contato-lista.component';

describe('ContatoListaComponent', () => {
  let component: ContatoListaComponent;
  let fixture: ComponentFixture<ContatoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
