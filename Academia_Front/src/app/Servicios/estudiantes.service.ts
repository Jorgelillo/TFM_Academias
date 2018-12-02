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
        tap(_ => console.log(`fetched estudiantes id=${id}`))
    );
  }

  /*
* Función que permite crear un nuevo estudiante e insertarlo en la base de datos
*/
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

  /*
* Función que elimina un estudiante de la bbdd
*/
  borrarEstudiante(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/estudiantes/${id}`;

    return this.http.delete(url, {headers: Httpheader})
      .pipe(
        tap((estudiantes: any) => console.log(`Estudiante eliminado /id=${id}`))
      )
  }

/*
* Función que obtiene las materias donde esta matriculado un estudiante
*/
  getMateriasEstudiantes(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}/estudiantes`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((_: any) => console.log(`fetched estudiantes id=${id}`))
      );
    }
    
/*
* Función añade una materia a un estudiante
*/
    addMateria(idEstudiante: number, idMateria: number): Observable<any> {
      const Httpheader = new HttpHeaders({'Content-Type': 'text/uri-list'});
      const url = `http://localhost:8080/materias/${idMateria}/estudiantes`;
      const body = `http://localhost:8080/estudiantes/${idEstudiante}`;
  
      return this.http.patch<any>(url, body, {headers: Httpheader}).pipe(
        tap((materias: any) => console.log(`Añadida materia id=${materias}`))
      );
    }
  
  /*
  * Función que elimina la relación entre una materia y un estudiante
  */
    borrarMateria(idEstudiante: number, idMateria: number): Observable<any> {
      const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
      const url = `http://localhost:8080/materias/${idMateria}/estudiantes/${idEstudiante}`;
  
      return this.http.delete<any>(url, {headers: Httpheader}).pipe(
        tap((_: any) => console.log(`Eliminada materia id=${idMateria}`))
      );
    }

  /*
  * Función que obtiene los estudiantes no matriculados en una materia
  */
  getEstudiantesRestantes(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}/estudiantesRestantes`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((_: any) => console.log(`Fetched estudiantes`))
      );
  }

  /*
  * Función que permite modificar los datos de un estudiante
  */
  modificarEstudiantes(id: number, nombre: string, apellidos: string, email: string, telefono: String): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/estudiantes/${id}/`;
    const body = {
      'nombre': nombre,
      'apellidos': apellidos,
      'email': email,
      'telefono': telefono
    }

    return this.http.patch<any>(url, body, {headers: Httpheader}).pipe(
      tap( _=> console.log(`Estudiante modificado`))
    );
  }



}
