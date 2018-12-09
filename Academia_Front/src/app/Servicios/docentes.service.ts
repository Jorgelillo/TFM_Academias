import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  constructor(
    private http: HttpClient) { }

/*
* Función que obtiene todas las docentes de la bbdd
*/    
public getDocentes(): Observable<any[]> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = 'http://localhost:8080/docentes';

  return this.http.get<any[]>(url, {headers: Httpheader})
    .pipe(
      tap(docentes =>  console.log('fetched docentes'))
    );  
  }

/*
*Función que obtiene una de las docentes de la bbdd
* @param id del docente
*/
public getDocente(id: number): Observable<any> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/docentes/${id}`;

  return this.http.get(url, {headers: Httpheader })
    .pipe(
        tap(docentes =>  console.log(`fetched docentes id=${id}`))
    );
  }

  /*
  *Función que inserta un docente en la base de datos
  */
  crearDocente(nombre: String, apellidos: String, email: String, telefono: String):Observable<any>{
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/docentes`;
    const body = {
      "nombre": nombre,
      "apellidos": apellidos,
      "email": email,
      "telefono": telefono
    }
    return this.http.post(url, body, {headers: Httpheader})
      .pipe(
        tap((docente: any) =>  console.log(`Docente creado /id=${docente.id}`))
    );
  }

  /*
  * Función que borra un docente de la bbdd
  */
  borrarDocente(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/docentes/${id}`;
    return this.http.delete(url, {headers: Httpheader})
      .pipe(
        tap((docente: any) =>  console.log(`Docente eliminado /id=${id}`))
      );
  }

  /*
  *Función que obtiene los docentes que imparten una materia
  */
  getDocentesMateria(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}/docentes`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((docentes: any) =>  console.log(`fetched docentes id=${id}`))
      );
    }

  /*
  * Función que añade una materia a un docente
  */
  addMateria(idDocente: number, idMateria: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'text/uri-list'});
    const url = `http://localhost:8080/materias/${idMateria}/docentes`;
    const body = `http://localhost:8080/docentes/${idDocente}`;

    return this.http.patch<any>(url, body, {headers: Httpheader}).pipe(
      tap((materias: any) =>  console.log(`Añadida materia id=${materias}`))
    );
  }

  /*
  *Función que borra la relación entre un docente y una materia
  */
  borrarMateria(idDocente: number, idMateria: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${idMateria}/docentes/${idDocente}`;

    return this.http.delete<any>(url, {headers: Httpheader}).pipe(
      tap((_: any) =>  console.log(`Eliminada materia id=${idMateria}`))
    );
  }

  /*
  *Función que obtiene los docentes no asignados a una materia
  */
  getDocentesRestantes(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}/docentesRestantes`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((_: any) =>  console.log(`Fetched docentes`))
      );
  }

  /*
  *Función que permite modificar los datos de un docente
  */
  modificarDocente(id: number, nombre: string, apellidos: string, email: string, telefono: String): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/docentes/${id}/`;
    const body = {
      'nombre': nombre,
      'apellidos': apellidos,
      'email': email,
      'telefono': telefono
    }
    return this.http.patch<any>(url, body, {headers: Httpheader}).pipe(
      tap( _=>  console.log(`Docente modificado`))
    );
  }

  /*
  *Función que obtiene una vista preconfigurada de los horarios de una materia
  */
  getVistaHorarios(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/horarioMateriaView/${id}`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((_: any) =>  console.log(`Fetched detalles`))
      );
  }

  }
