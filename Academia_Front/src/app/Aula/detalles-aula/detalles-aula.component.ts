import { Component, OnInit } from '@angular/core';
import { Aulas } from 'src/app/Modelos/Aulas';
import { AulasServiceService } from 'src/app/Servicios/aulas-service.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-detalles-aula',
  templateUrl: './detalles-aula.component.html',
  styleUrls: ['./detalles-aula.component.css']
})
export class DetallesAulaComponent implements OnInit {

  aula: Aulas;
  modificarAula: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private aulasService: AulasServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getDocente(id);
    this.crearFormulario();

  }

  crearFormulario(){ 
    this.modificarAula = this.formBuilder.group({
      capacidad: ['', Validators.required],
    });
  }

  modificarAulas(): void {
    const capacidad = this.modificarAula.value.capacidad;
    this.aulasService.modificarAulas(this.aula.id, capacidad).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`aulas/detalles/${this.aula.id}`);
  }

  /*
  *Función que obtiene uno de los docentes de la bbdd
  */
 getDocente(id: number): void {
  this.aula = new Aulas();
  this.aulasService.getAula(id).subscribe(
    data => {
      this.aula.id = data.id;
      this.aula.capacidad = data.capacidad;
      console.log(data);
      }
    );
  }
}
