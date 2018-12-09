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

import com.example.demo.Model.Docentes;
import com.example.demo.Model.Materias;
import com.example.demo.Repository.DocenteReopository;
import com.example.demo.Views.ModelViews.VistaHorario;

@Controller
public class ControllerHorarioMateria {

		@Autowired
		private DocenteReopository docenteRepository;
		
		//Permite mostrar una lista de horarios determiado, según el ID de docente.
		
		@RequestMapping(value = "/horarioMateriaView/{id}", method = RequestMethod.GET)
		public ResponseEntity<List<VistaHorario>> vistaHorario(@PathVariable("id") long id) {
			
			if (docenteRepository.findById(id) == null) {
				return new ResponseEntity<List<VistaHorario>>(HttpStatus.NOT_FOUND);
			} else {
			Docentes a = docenteRepository.findById(id);
			List<VistaHorario> listaVistas = new ArrayList<>();
			
			for(Materias m: a.getMaterias()) {
				
				VistaHorario v = new VistaHorario();
				
				v.setId(m.getId());
				v.setMateria(m.getNombre());
				v.setGrupo(m.getGrupo());
				v.setNivel(m.getNivel());
				v.setHorario(m.getHorarios().get(0).getHorarios());
				v.setHoras(m.getHorarios().get(0).getHorarios());	
				
				listaVistas.add(v);
			}
			Collections.sort(listaVistas);
			return new ResponseEntity<List<VistaHorario>>(listaVistas, HttpStatus.ACCEPTED);
			}	
	}
}

		