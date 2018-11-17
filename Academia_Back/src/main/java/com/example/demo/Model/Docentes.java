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
@Table(name = "Docentes")
public class Docentes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial", name="id_docentes")
	private long Id;
	
	@Column
	private String nombre;
	
	@Column
	private String apellidos;
	
	@Column
	private String email;
	
	@Column
	private int telefono;
	
	@ManyToMany(mappedBy = "docentes", cascade = CascadeType.DETACH)
	private List<Materias> materias;
	
	public Docentes() {
		materias = new ArrayList<>();
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

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public List<Materias> getMaterias() {
		return materias;
	}

	public void setMaterias(List<Materias> materias) {
		this.materias = materias;
	}
	
	public List<Materias> materiasRestantes(List<Materias> materias){
		List<Materias> materiasRestantes = new ArrayList<>();
		for(Materias materia : materias) {
			if(!this.materias.contains(materia)) {
				Materias mat = new Materias();
				mat.setId(materia.getId());
				mat.setNombre(materia.getNombre());
				mat.setNivel(materia.getNivel());
				materiasRestantes.add(mat);
			}
		}
		return materiasRestantes;
	}
	
}
