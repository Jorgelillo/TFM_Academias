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
public class MateriasController {
	
	@Autowired
	private DocenteReopository docenteRepositorio;
	
	@Autowired
	private MateriaRepository materiaRepositorio;
	
	@RequestMapping(value = "/materias/{id}/docentesRestantes", method = RequestMethod.GET)
	public ResponseEntity<List<Docentes>> docentesRestantes(@PathVariable("id") long id) {
		Materias materia = materiaRepositorio.findById(id);
				
		if ( materia ==  null ) {
			return new ResponseEntity<List<Docentes>>(HttpStatus.NOT_FOUND);
		} else {
			List<Docentes> docentesRestantes = materia.docentesRestantes(docenteRepositorio.findAll());
			return new ResponseEntity<List<Docentes>>(docentesRestantes, HttpStatus.OK);
		}	
	}
}