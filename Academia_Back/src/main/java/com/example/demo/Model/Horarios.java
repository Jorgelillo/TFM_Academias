package com.example.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Horarios")
public class Horarios {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial", name="id_horario")
	private long Id;
	
	@Column
	private String horarios;
	
	@ManyToOne
	private Materias materias;
	
	@ManyToOne
	private Aulas aulas;

	public Horarios() {
		
	}
	
	public Horarios(String horarios, Materias materias, Aulas aulas) {
		this.horarios = horarios;
		this. materias = materias;
		this.aulas = aulas;
	}
	
	
	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getHorarios() {
		return horarios;
	}

	public void setHorarios(String horarios) {
		this.horarios = horarios;
	}

	public Materias getMaterias() {
		return materias;
	}

	public void setMaterias(Materias materias) {
		this.materias = materias;
	}

	public Aulas getAulas() {
		return aulas;
	}

	public void setAulas(Aulas aulas) {
		this.aulas = aulas;
	}
	
	
	
	

}
