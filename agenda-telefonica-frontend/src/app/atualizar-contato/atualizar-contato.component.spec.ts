import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarContatoComponent } from './atualizar-contato.component';

describe('AtualizarContatoComponent', () => {
  let component: AtualizarContatoComponent;
  let fixture: ComponentFixture<AtualizarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
