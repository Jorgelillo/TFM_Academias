import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MateriasService } from 'src/app/Servicios/materias.service';


@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

  crearMaterias: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private materiaService: MateriasService) { }

  ngOnInit() {
    this.crearFormulario();
  }

  /**
  * Función que crea un formulario y sus funcionalidades
  */
  crearFormulario(){ 
    this.crearMaterias = this.formBuilder.group({
      nombre: ['', Validators.required],
      grupo: ['', Validators.required],
      nivel: ['', Validators.required]
      }
    );
  }

  /**
  * Función que permite crear una materia e insertarla en la bbdd a través de un formulario destinado a ello
  */
  crearMateria() {
    const nombre = this.crearMaterias.value.nombre;
    const nivel = this.crearMaterias.value.nivel;
    const grupo = this.crearMaterias.value.grupo;
    this.materiaService.crearMateria(nombre, nivel, grupo).subscribe(
      data => {
        console.log(data);
        location.assign('materia');
      }
    )
  }

}
