package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Docentes;

@RepositoryRestResource(collectionResourceRel = "docentes", path = "docentes")
public interface DocenteReopository extends CrudRepository<Docentes, Long>{
	Docentes findById(long id);
	List<Docentes> findAll();
}
