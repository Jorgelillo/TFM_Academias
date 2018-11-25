
package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Horarios;

@RepositoryRestResource(collectionResourceRel = "horarios", path = "horarios")
public interface HorariosRepository extends CrudRepository<Horarios, Long>{
	Horarios findById(long id);
	List<Horarios> findAll();
}
