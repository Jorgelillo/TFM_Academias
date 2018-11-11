package com.example.Modelos.Repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.Modelos.Docentes;

@RepositoryRestResource(collectionResourceRel = "docentes", path = "docentes")
public interface DocenteReopository extends CrudRepository<Docentes, Long>{

}
