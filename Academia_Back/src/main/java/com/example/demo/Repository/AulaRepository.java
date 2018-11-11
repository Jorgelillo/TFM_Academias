package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Aulas;

@RepositoryRestResource(collectionResourceRel = "aulas", path = "aulas")
public interface AulaRepository extends CrudRepository<Aulas, Long>{

}
