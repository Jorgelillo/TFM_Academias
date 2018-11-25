//
//package com.example.demo.Controladores;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.rest.webmvc.RepositoryRestController;
//import org.springframework.hateoas.Resource;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//import com.example.demo.Model.Horarios;
//import com.example.demo.Repository.HorariosRepository;
//
//@RepositoryRestController
//public class HorariosController {
//	
//	@Autowired
//	private HorariosRepository horariosRepository;
//	
//	@RequestMapping(value = "/horarios", method = RequestMethod.POST, headers = "Accept=application/json")
//	public ResponseEntity<Horarios> comparadorHorarios(@RequestBody Resource<Horarios> horario) {
//		
//		Horarios horarios = horario.getContent();
//		System.out.println(horarios.getId());
//		
//		if(horariosRepository.findByAulas_AulasIdAndHorarios(horarios.getAulas().getAulasId(), horarios.getHorarios()) != null ) {
//			Horarios h = horariosRepository.findByAulas_AulasIdAndHorarios(horarios.getAulas().getAulasId(), horarios.getHorarios());
//			horariosRepository.deleteById(h.getId());
//			horariosRepository.save(horarios);
//		} else {
//			horariosRepository.save(horarios);
//		}
//		
//		return new ResponseEntity<Horarios>(HttpStatus.NO_CONTENT);
//
//	}
//}
