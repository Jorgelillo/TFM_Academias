package com.example.Modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Estudiantes")
public class Estudiantes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial", name="id_estudiantes")
	private long Id;
	
	@Column
	private String nombre;
	
	@Column
	private String apellidos;
	
	@Column
	private String email;
	
	@Column
	private int telefono;

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
	
}