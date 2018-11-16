import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AulasServiceService } from 'src/app/Servicios/aulas-service.service';

@Component({
  selector: 'app-crear-aula',
  templateUrl: './crear-aula.component.html',
  styleUrls: ['./crear-aula.component.css']
})
export class CrearAulaComponent implements OnInit {
  crearaulas: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private aulasService: AulasServiceService) { }

  ngOnInit() {
    this.crearFormulario();
    }
            
  crearFormulario(){ 
    this.crearaulas = this.formBuilder.group({
      capacidad: ['', Validators.required],
    });
  }

  crearAulas() {
    const capacidad = this.crearaulas.value.capacidad;
    this.aulasService.crearAula(capacidad).subscribe(
      data => {
        console.log(data);
        location.assign('aulas');
      }
    )
  }
}
