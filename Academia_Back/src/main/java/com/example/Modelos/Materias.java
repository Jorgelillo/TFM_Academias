package com.example.Modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
}
