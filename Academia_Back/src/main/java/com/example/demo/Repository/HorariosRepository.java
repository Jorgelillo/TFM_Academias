
package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
// import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Aulas;
import com.example.demo.Model.Horarios;

@RepositoryRestResource(collectionResourceRel = "horarios", path = "horarios")
public interface HorariosRepository extends CrudRepository<Horarios, Long>{
	Horarios findById(long id);
	List<Horarios> findAll();
	List<Horarios> findAllByAulas(@Param("aula") Aulas aula);
//	Horarios findByAulas_AulasIdAndHorarios(@Param("id") long id, @Param("hor") String hor);	
}
