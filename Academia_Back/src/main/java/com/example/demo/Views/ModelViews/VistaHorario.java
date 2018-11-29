package com.example.demo.Views.ModelViews;

public class VistaHorario implements Comparable<VistaHorario>{
	
	private long id;
	
	private String horario;
	
	private String materia;

	private String nivel;
	
	private String grupo;
	
	private String horas;

	public VistaHorario() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public String getGrupo() {
		return grupo;
	}

	public void setGrupo(String grupo) {
		this.grupo = grupo;
	}
	
	public String getHoras() {
		return horas;
	}

	public void setHoras(String horas) {
		this.horas = horas.substring(2, 4);
	}

	@Override
	public int compareTo(VistaHorario comparacion) {
		
		return horas.compareTo(comparacion.horas);
	}

	
	
}
