package com.example.demo.Model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Materias")
public class Materias {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial", name="id_materia")
	private long Id;
	
	@Column
	private String nombre;
	
	@Column
	private String nivel;
	
	@ManyToMany(cascade = CascadeType.DETACH)
	private List<Docentes> docentes;
	
	public Materias() {
		docentes = new ArrayList<>();
	}


	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public List<Docentes> getDocentes() {
		return docentes;
	}

	public void setDocentes(List<Docentes> docentes) {
		this.docentes = docentes;
	}
	
}
