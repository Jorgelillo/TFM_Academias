package com.example.Modelos.Repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.Modelos.Materias;

@RepositoryRestResource(collectionResourceRel = "materias", path = "materias")
public interface MateriaRepository extends CrudRepository<Materias, Long>{

}
