import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-atualizar-contato',
  templateUrl: './atualizar-contato.component.html',
  styleUrls: ['./atualizar-contato.component.css']
})
export class AtualizarContatoComponent implements OnInit {
  id: number;
  contato: Contato;
  mascaraTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private route: ActivatedRoute, private router: Router,
              private contatoService: ContatoService) { }

  ngOnInit() {
    this.contato = new Contato();

    this.id = this.route.snapshot.params['id'];

    this.contatoService.getContato(this.id)
      .subscribe(data => {
        this.contato = data;
      }, error => console.log(error));
  }

  atualizarContato() {
    this.contatoService.atualizarContato(this.id, this.contato).subscribe();
    this.contato = new Contato();
    this.gotoList();
  }

  onSubmit() {
    this.atualizarContato();
  }

  gotoList() {
    this.router.navigate(['/contatos']);
  }
}
