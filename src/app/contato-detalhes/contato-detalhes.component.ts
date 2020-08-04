import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato-detalhes',
  templateUrl: './contato-detalhes.component.html',
  styleUrls: ['./contato-detalhes.component.css']
})
export class ContatoDetalhesComponent implements OnInit {

  id: number;
  contato: Contato;

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

  list() {
    this.router.navigate(['contatos']);
  }
}
