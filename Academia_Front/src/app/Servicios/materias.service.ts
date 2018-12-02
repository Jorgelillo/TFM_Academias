import { Injectable, asNativeElements } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(
    private http: HttpClient) { }

/*
* Función que obtiene todas las materias de la bbdd
*/    
public getMaterias(): Observable<any[]> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = 'http://localhost:8080/materias';

  return this.http.get<any[]>(url, {headers: Httpheader})
    .pipe(
      tap(materias => console.log('fetched materias'))
    );  
  }

  /*
* Función que obtiene los horarios de una materia a partir de una url como parámetro
*/
  public getHorarios(url: string): Observable<any[]> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  
    return this.http.get<any[]>(url, {headers: Httpheader})
      .pipe(
        tap(horarios => console.log('fetched horarios'))
      );  
    }

/*
*Función que obtiene una de las materias de la bbdd
* @param id de la materia
*/
public getMateria(id: number): Observable<any> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/materias/${id}`;

  return this.http.get(url, {headers: Httpheader })
    .pipe(
        tap(materia => console.log(`fetched materias id=${id}`))
    );
  }

  /*
* Función que permite crear una materia e insertarla en la base de datos
*/
  crearMateria(nombre: String, nivel: String, grupo: String):Observable<any>{
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias`;
    const body = {
      "nivel": nivel,
      "nombre": nombre,
      "grupo": grupo
    }
    return this.http.post(url, body, {headers: Httpheader})
      .pipe(
        tap((materia: any) => console.log(`Materia creada /id=${materia.id}`))
    );
  }

  /*
  * Función que permite borrar los datos de una materia
  */
  borrarMateria(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}`;

    return this.http.delete(url, {headers: Httpheader})
      .pipe(
        tap((materia: any) => console.log(`Materia eliminada /id=${id}`))
      );
  }

  /*
  * Función que permite obtener las materias que imparte un docente
  */
  getMateriasDocentes(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/docentes/${id}/materias`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((materia: any) => console.log(`Fetched materias`))
      );
  }

  /*
  * Función que obtiene las materias que no imparte un docente
  */
  getMateriasRestantes(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/docentes/${id}/materiasRestantes`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((_: any) => console.log(`Fetched materias`))
      );
  }

  /*
* Función que obtiene las materias donde no esta matriculado un estudiante
*/
  getMateriasRestantesEstudiante(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/estudiantes/${id}/materiasRestantes`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((_: any) => console.log(`Fetched materias`))
      );
  }

  /*
* Función que permite borrar la relacion entre una materia y un docente de la base de datos
*/
  borrarDocente(idMateria: number, idDocente: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${idMateria}/docentes/${idDocente}`;

    return this.http.delete<any>(url, {headers: Httpheader}).pipe(
      tap((_: any) => console.log(`Eliminado docente id=${idDocente}`))
    );
  }

  /*
* Función que obtiene las materias donde esta matriculado un estudiante
*/
  getMateriasEstudiante(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/estudiantes/${id}/materias`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((_: any) => console.log(`Fetched materias`))
      );
  }

  /*
* Función que borra la relacion entre una materia y un estudiante
*/
  borrarEstudiante(idMateria: number, idEstudiante: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${idMateria}/estudiantes/${idEstudiante}`;

    return this.http.delete<any>(url, {headers: Httpheader}).pipe(
      tap((_: any) => console.log(`Eliminado estudiante id=${idEstudiante}`))
    );
  }

  /*
* Función que permite modificar los datos de una materia
*/
  modificarMaterias(id: number, nombre: string, nivel: string, grupo: string): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}/`;
    const body = {
      'nombre': nombre,
      'nivel': nivel,
      "grupo": grupo
    }

    return this.http.patch<any>(url, body, {headers: Httpheader}).pipe(
      tap( _=> console.log(`Materia modificada`))
    );
  }

}
