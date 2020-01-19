import { ContatoDetalhesComponent } from './../contato-detalhes/contato-detalhes.component';
import { Observable } from "rxjs";
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.component.html',
  styleUrls: ['./contato-lista.component.css']
})
export class ContatoListaComponent implements OnInit {
  contatos: Observable<Contato[]>;

  constructor(private contatoService: ContatoService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.contatos = this.contatoService.getListaContatos();
  }

  deletarContato(id: number) {
    this.contatoService.deletarContato(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

  contatoDetalhes(id: number) {
    this.router.navigate(['detalhes', id]);
  }

  atualizarContato(id: number) {
    this.router.navigate(['atualizar', id]);
  }
}
