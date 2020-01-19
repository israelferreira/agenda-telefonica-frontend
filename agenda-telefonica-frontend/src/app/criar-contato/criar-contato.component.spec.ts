import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContatoComponent } from './criar-contato.component';

describe('CriarContatoComponent', () => {
  let component: CriarContatoComponent;
  let fixture: ComponentFixture<CriarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
