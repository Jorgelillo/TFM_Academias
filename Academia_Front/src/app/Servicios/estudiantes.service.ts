import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(
    private http: HttpClient) { }

/*
* Función que obtiene todos los estudiantes de la bbdd
*/    
public getEstudiantes(): Observable<any[]> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = 'http://localhost:8080/estudiantes';

  return this.http.get<any[]>(url, {headers: Httpheader})
    .pipe(
      tap(estudiantes => console.log('fetched estudiantes'))
    );  
  }

/*
*Función que obtiene una de los estudiantes de la bbdd
* @param id de la materia
*/
public getEstudiante(id: number): Observable<any> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/estudiantes/${id}`;

  return this.http.get(url, {headers: Httpheader })
    .pipe(
        tap(estudiantes => console.log(`fetched estudiantes id=${id}`))
    );
  }

  crearEstudiante(nombre: String, apellidos: String, email: String, telefono: String):Observable<any>{
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/estudiantes`;
    const body = {
      "nombre": nombre,
      "apellidos": apellidos,
      "email": email,
      "telefono": telefono
    }

    return this.http.post(url, body, {headers: Httpheader})
      .pipe(
        tap((estudiantes: any) => console.log(`Estudiantes creado /id=${estudiantes.id}`))
    )
  }

  borrarEstudiante(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/estudiantes/${id}`;

    return this.http.delete(url, {headers: Httpheader})
      .pipe(
        tap((estudiantes: any) => console.log(`Estudiante eliminado /id=${id}`))
      )
  }

}
