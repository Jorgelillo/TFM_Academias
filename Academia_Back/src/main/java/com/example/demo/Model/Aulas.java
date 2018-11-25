package com.example.demo.Model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Aulas")
public class Aulas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial", name="id_aula")
	private long Id;
	
	@Column
	private String codigo;
	
	@Column
	private String nombre;
	
	@Column
	private int capacidad;
	
	@OneToMany(mappedBy = "aulas",  cascade = CascadeType.DETACH)
	private List<Horarios> horarios;

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public int getCapacidad() {
		return capacidad;
	}

	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}
	public List<Horarios> getHorarios() {
		return horarios;
	}

	public void setHorarios(List<Horarios> horarios) {
		this.horarios = horarios;
	}
	

	
}
