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

  crearFormulario(){ 
    this.crearMaterias = this.formBuilder.group({
      nombre: ['', Validators.required],
      nivel: ['', Validators.required]
    });
  }

  crearMateria() {
    const nombre = this.crearMaterias.value.nombre;
    const nivel = this.crearMaterias.value.nivel;
    this.materiaService.crearMateria(nombre, nivel).subscribe(
      data => {
        console.log(data);
        location.assign('materias');
      }
    )
  }
}
