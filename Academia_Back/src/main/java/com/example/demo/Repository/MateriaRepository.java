package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Materias;

@RepositoryRestResource(collectionResourceRel = "materias", path = "materias")
public interface MateriaRepository extends CrudRepository<Materias, Long>{

}
