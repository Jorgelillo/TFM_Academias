package com.example.demo.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.Model.Estudiantes;
import com.example.demo.Model.Materias;
import com.example.demo.Repository.EstudiantesRepository;
import com.example.demo.Repository.MateriaRepository;

@RepositoryRestController
public class EstudiantesController {
	
	@Autowired
	private EstudiantesRepository estudianteRepositorio;
	
	@Autowired
	private MateriaRepository materiaRepositorio;
	
	@RequestMapping(value = "/estudiantes/{id}/materiasRestantes", method = RequestMethod.GET)
	public ResponseEntity<List<Materias>> materiasRestantes(@PathVariable("id") long id) {
		Estudiantes estudiante = estudianteRepositorio.findById(id);
				
		if ( estudiante ==  null ) {
			return new ResponseEntity<List<Materias>>(HttpStatus.NOT_FOUND);
		} else {
			List<Materias> materiasRestantes = estudiante.materiasRestantes(materiaRepositorio.findAll());
			return new ResponseEntity<List<Materias>>(materiasRestantes, HttpStatus.OK);
		}	
	}
}