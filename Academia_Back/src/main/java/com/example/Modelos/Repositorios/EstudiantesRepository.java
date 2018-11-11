package com.example.Modelos.Repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.Modelos.Estudiantes;

@RepositoryRestResource(collectionResourceRel = "estudiantes", path = "estudiantes")
public interface EstudiantesRepository extends CrudRepository<Estudiantes, Long>{

}
