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

  lunes: any[] = [];
  martes: any[] = [];
  miercoles: any[] = [];
  jueves: any[] = [];
  viernes: any[] = [];
  sabado: any[] = [];

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
    location.assign(`aula/detalles/${this.aula.id}`);
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

        for( let i = 0; i < this.horarios.length; i++){
          let hora = this.horarios[i].horarios;
          console.log(hora.substring(0,1));
          console.log(hora.substring(9,10));

          if (hora.substring(0,1) == 'L'){
            this.lunes.push(hora.substring(2,7));
            console.log(this.lunes);
          }
          if (hora.substring(9,10) == 'L'){
            this.lunes.push(hora.substring(11,16));
            console.log(this.lunes);
          }
          if (hora.substring(0,1) == 'M'){
            this.martes.push(hora.substring(2,7));
            console.log(this.martes);
          }
          if (hora.substring(9,10) == 'M'){
            this.martes.push(hora.substring(11,16));
            console.log(this.martes);
          }
          if (hora.substring(0,1) == 'X'){
            this.miercoles.push(hora.substring(2,7));
            console.log(this.miercoles);
          }
          if (hora.substring(9,10) == 'X'){
            this.miercoles.push(hora.substring(11,16));
            console.log(this.miercoles);
          }
          if (hora.substring(0,1) == 'J'){
            this.jueves.push(hora.substring(2,7));
            console.log(this.jueves);
          }
          if (hora.substring(9,10) == 'J'){
            this.jueves.push(hora.substring(11,16));
            console.log(this.jueves);
          }
          if (hora.substring(0,1) == 'V'){
            this.viernes.push(hora.substring(2,7));
            console.log(this.viernes);
          }
          if (hora.substring(9,10) == 'V'){
            this.viernes.push(hora.substring(11,16));
            console.log(this.viernes);
          }
          if (hora.substring(0,1) == 'S'){
            this.sabado.push(hora.substring(2,7));
            console.log(this.sabado);
          }
          if (hora.substring(9,10) == 'S'){
            this.sabado.push(hora.substring(11,16));
            console.log(this.sabado);
          }
        }
        this.lunes.sort();
        this.martes.sort();
        this.miercoles.sort();
        this.jueves.sort();
        this.viernes.sort();
        this.sabado.sort();
      }
    );

  }
}
