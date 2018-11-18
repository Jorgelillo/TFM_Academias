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
	
	@ManyToMany(cascade = CascadeType.DETACH)
	private List<Estudiantes> estudiantes;
	
	public Materias() {
		docentes = new ArrayList<>();
		estudiantes = new ArrayList<>();
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
	
	public List<Estudiantes> getEstudiantes() {
		return estudiantes;
	}

	public void setEstudiantes(List<Estudiantes> estudiantes) {
		this.estudiantes = estudiantes;
	}

	public List<Docentes> docentesRestantes(List<Docentes> docentes){
		List<Docentes> docentesRestantes = new ArrayList<>();
		for(Docentes docente : docentes) {
			if(!this.docentes.contains(docente)) {
				Docentes doc = new Docentes();
				doc.setId(docente.getId());
				doc.setNombre(docente.getNombre());
				doc.setApellidos(docente.getApellidos());
				doc.setEmail(docente.getEmail());
				doc.setTelefono(docente.getTelefono());
				docentesRestantes.add(doc);
			}
		}
		return docentesRestantes;
	}
	
	public List<Estudiantes> estudiantesRestantes(List<Estudiantes> estudiantes){
		List<Estudiantes> estudiantesRestantes = new ArrayList<>();
		for(Estudiantes estudiante : estudiantes) {
			if(!this.estudiantes.contains(estudiante)) {
				Estudiantes est = new Estudiantes();
				est.setId(estudiante.getId());
				est.setNombre(estudiante.getNombre());
				est.setApellidos(estudiante.getApellidos());
				est.setEmail(estudiante.getEmail());
				est.setTelefono(estudiante.getTelefono());
				estudiantesRestantes.add(est);
			}
		}
		return estudiantesRestantes;
	}
	
	
}
