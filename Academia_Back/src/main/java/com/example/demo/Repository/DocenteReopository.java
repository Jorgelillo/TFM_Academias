package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Docentes;

@RepositoryRestResource(collectionResourceRel = "docentes", path = "docentes")
public interface DocenteReopository extends CrudRepository<Docentes, Long>{

}
