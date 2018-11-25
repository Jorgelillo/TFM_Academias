import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }

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
      tap((estudiantes: any) => console.log(`Horario creado`))
  )
}

getHorarioAula(idMateria: number):Observable<any>{
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/materias/${idMateria}/horarios`;

  return this.http.get(url, {headers: Httpheader})
  .pipe(
    tap((horarios: any) => console.log(`Horarios`))
);
}
}
