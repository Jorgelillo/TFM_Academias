//package com.example.demo.Controladores;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.rest.webmvc.RepositoryRestController;
//import org.springframework.hateoas.Resource;
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
//	@RequestMapping(value = "/horarios", method = RequestMethod.POST)
//	public boolean materiasRestantes(@RequestBody Resource<Horarios> horario) {
//		
//		Horarios horarios = horario.getContent();
//		return false;
//		
//
//
//	}
//}
