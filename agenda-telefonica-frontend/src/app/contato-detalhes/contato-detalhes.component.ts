import { Contato } from '../contato';
import { Component, OnInit, Input } from '@angular/core';
import { ContatoService } from '../contato.service';
import { ContatoListaComponent } from '../contato-lista/contato-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

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

    this.id = this.route.snapshot.params['id'];

    this.contatoService.getContato(this.id)
      .subscribe(data => {
        this.contato = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['contatos']);
  }
}
