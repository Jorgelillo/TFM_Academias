import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }

  /*
  *Función que permite definir el horario y el aula de una materia
  */

  setHorarios(horarios: string, materias: string, aulas: string):Observable<any>{
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/horarios`;
    const body = {
      "horarios": horarios,
      "materias": materias,
      "aulas": aulas,
    }

    return this.http.post(url, body, {headers: Httpheader})
    .pipe(
      tap((estudiantes: any) =>  console.log(`Horario creado`))
  )
}

/*
* Función que permite actualizar el horario y aula de una materia
*/
actualizarHorarios(horariosId: string, horarios: string, aulas: string):Observable<any>{
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/horarios/${horariosId}`;
  const body = {
    "horarios": horarios,
    "aulas": aulas,
  }
  // console.log(body);

  return this.http.patch(url, body, {headers: Httpheader})
  .pipe(
    tap((estudiantes: any) =>  console.log(`Horario actualizado`))
)
}

/*
* Función que obtiene el horario de un aula
*/
getHorarioAula(idMateria: number):Observable<any>{
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/materias/${idMateria}/horarios`;

  return this.http.get(url, {headers: Httpheader})
  .pipe(
    tap((horarios: any) =>  console.log(`Horarios`))
);
}

borrarHorario(idhorarios: number):Observable<any>{
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/horarios/${idhorarios}`;

  return this.http.delete(url, {headers: Httpheader})
  .pipe(
    tap((horarios: any) =>  console.log(`Horario eliminado`))
);
}
}
