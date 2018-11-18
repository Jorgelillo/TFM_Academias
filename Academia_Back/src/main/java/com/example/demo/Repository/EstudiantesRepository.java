package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Estudiantes;

@RepositoryRestResource(collectionResourceRel = "estudiantes", path = "estudiantes")
public interface EstudiantesRepository extends CrudRepository<Estudiantes, Long>{
	Estudiantes findById(long id);
	List<Estudiantes> findAll();
}
