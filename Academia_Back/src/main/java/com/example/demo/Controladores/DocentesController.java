package com.example.demo.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.Model.Docentes;
import com.example.demo.Model.Materias;
import com.example.demo.Repository.DocenteReopository;
import com.example.demo.Repository.MateriaRepository;

@RepositoryRestController
public class DocentesController {
	
	@Autowired
	private DocenteReopository docenteRepositorio;
	
	@Autowired
	private MateriaRepository materiaRepositorio;
	
	@RequestMapping(value = "/docentes/{id}/materiasRestantes", method = RequestMethod.GET)
	public ResponseEntity<List<Materias>> materiasRestantes(@PathVariable("id") long id) {
		Docentes docente = docenteRepositorio.findById(id);
		
		if ( docente ==  null ) {
			return new ResponseEntity<List<Materias>>(HttpStatus.NOT_FOUND);
		} else {
			List<Materias> materiasRestantes = docente.materiasRestantes(materiaRepositorio.findAll());
			return new ResponseEntity<List<Materias>>(materiasRestantes, HttpStatus.OK);
		}	
	}
}
