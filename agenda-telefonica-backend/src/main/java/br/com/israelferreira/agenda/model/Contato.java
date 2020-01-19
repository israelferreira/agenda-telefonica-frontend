package br.com.israelferreira.agenda.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "contato")
public class Contato implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Long id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "num_telefone")
	private String telefone;
	
	@Column(name = "email")
	private String email;
	
	@JsonbDateFormat(value = "yyyy-MM-dd")	
	@Column(name = "data_nascimento")	
	private LocalDate dataNascimento;	
	
	@Column(name = "informacoes_extras")
	private String informacoesExtras;
		
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public LocalDate getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getInformacoesExtras() {
		return informacoesExtras;
	}
	public void setInformacoesExtras(String informacoesExtras) {
		this.informacoesExtras = informacoesExtras;
	}
	
	
}
