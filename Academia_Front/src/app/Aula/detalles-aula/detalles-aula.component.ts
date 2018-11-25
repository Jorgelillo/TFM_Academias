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
  horarios: any[];

  constructor(private formBuilder: FormBuilder,
              private aulasService: AulasServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getAula(id);
    this.crearFormulario();
    this.getHorarios(id);

  }

  crearFormulario(){ 
    this.modificarAula = this.formBuilder.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      capacidad: ['', Validators.required]
    });
  }

  modificarAulas(): void {
    const nombre = this.modificarAula.value.nombre;
    const codigo = this.modificarAula.value.codigo;
    const capacidad = this.modificarAula.value.capacidad;
    this.aulasService.modificarAulas(this.aula.id, capacidad, nombre, codigo).subscribe(
      data => {
        console.log(data);
      }
    );
    location.assign(`aulas/detalles/${this.aula.id}`);
  }

  /*
  *Función que obtiene uno de los docentes de la bbdd
  */
 getAula(id: number): void {
  this.aula = new Aulas();
  this.aulasService.getAula(id).subscribe(
    data => {
      this.aula.id = data.id;
      this.aula.nombre = data.nombre;
      this.aula.codigo = data.codigo;
      this.aula.capacidad = data.capacidad;
      console.log(data);
      }
    );
  }

  getHorarios(id: number): void {
    this.aulasService.getHorarios(id).subscribe(
      data => {
        this.horarios = data['_embedded'].horarios;
        console.log(this.horarios);
      }
    );

  }
}
