package com.example.demo.Views.ControllerView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.Model.Aulas;
import com.example.demo.Model.Horarios;
import com.example.demo.Repository.AulaRepository;
import com.example.demo.Repository.HorariosRepository;
import com.example.demo.Views.ModelViews.VistaHorario;

@Controller
public class ControllerHorario {
	
	@Autowired
	private HorariosRepository horariosRepository;
	
	@Autowired
	private AulaRepository aulasRepository;
	
	//Permite mostrar un horario determiado, según su id, accediendo a las materias del mismo

	@RequestMapping(value = "/horarioView/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<VistaHorario>> vistaHorario(@PathVariable("id") long id) {
		
		Aulas aula = aulasRepository.findById(id);
		List<Horarios> hora = horariosRepository.findAllByAulas(aula);
		
		if ( hora ==  null ) {
			return new ResponseEntity<List<VistaHorario>>(HttpStatus.NOT_FOUND);
		} else {
			
			List<VistaHorario> lista = new ArrayList<>();
			
			for(Horarios h: hora) {
				
				VistaHorario v = new VistaHorario();
				v.setId(h.getId());
				v.setHorario(h.getHorarios());
				v.setMateria(h.getMaterias().getNombre());
				v.setNivel(h.getMaterias().getNivel());
				v.setGrupo(h.getMaterias().getGrupo());
				v.setHoras(h.getHorarios());
				
				lista.add(v);
				
			}
			Collections.sort(lista);
			return new ResponseEntity<List<VistaHorario>>(lista, HttpStatus.ACCEPTED);
		}
	}
}
