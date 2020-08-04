import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-atualizar-contato',
  templateUrl: './atualizar-contato.component.html',
  styleUrls: ['./atualizar-contato.component.css']
})
export class AtualizarContatoComponent implements OnInit {

  id: number;
  contato: Contato;
  enviado: boolean;
  mascaraTelefone = '(00) 00000-0000';
  contatos: Observable<Contato[]>;

  constructor(private route: ActivatedRoute, private router: Router,
              private contatoService: ContatoService) { }

  ngOnInit() {
    this.contato = new Contato();

    this.id = this.route.snapshot.params.id;

    this.contatoService.getContato(this.id)
      .subscribe(data => {
        this.contato = data;
      }, error => console.log(error));
  }

  atualizarContato() {
    this.contatoService.atualizarContato(this.id, this.contato).subscribe();
    this.contato = new Contato();
    this.contatos = this.contatoService.getListaContatos();
    this.gotoList();
  }

  onSubmit() {
    this.atualizarContato();
  }

  gotoList() {
    this.router.navigate(['/contatos']);
  }
}
