import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarContatoComponent } from './criar-contato/criar-contato.component';
import { ContatoDetalhesComponent } from './contato-detalhes/contato-detalhes.component';
import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { AtualizarContatoComponent } from './atualizar-contato/atualizar-contato.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    CriarContatoComponent,
    ContatoDetalhesComponent,
    ContatoListaComponent,
    AtualizarContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
