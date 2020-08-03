import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.css']
})
export class CriarContatoComponent implements OnInit {

  contato: Contato = new Contato();
  enviado = false;
  mascaraTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  contatos: Observable<Contato[]>;

  constructor(private contatoService: ContatoService,
              private router: Router) { }

  ngOnInit() {
  }

  newContato(): void {
    this.enviado = false;
    this.contato = new Contato();
  }

  salvar() {
    this.contatoService.criarContato(this.contato).subscribe();
    this.contato = new Contato();
    this.contatos = this.contatoService.getListaContatos();
    this.gotoList();
  }

  onSubmit() {
    this.enviado = true;
    this.salvar();
  }

  gotoList() {
    this.router.navigate(['/contatos']);
  }
}
