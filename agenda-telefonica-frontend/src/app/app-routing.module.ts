import { ContatoDetalhesComponent } from './contato-detalhes/contato-detalhes.component';
import { CriarContatoComponent } from './criar-contato/criar-contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { AtualizarContatoComponent } from './atualizar-contato/atualizar-contato.component';

const routes: Routes = [
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
  { path: 'contatos', component: ContatoListaComponent },
  { path: 'adicionar', component: CriarContatoComponent },
  { path: 'atualizar/:id', component: AtualizarContatoComponent },
  { path: 'detalhes/:id', component: ContatoDetalhesComponent },
  { path: '**', redirectTo: 'contatos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
