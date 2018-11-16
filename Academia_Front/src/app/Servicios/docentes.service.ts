import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
      tap(docentes => console.log('fetched docentes'))
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
        tap(docentes => console.log(`fetched docentes id=${id}`))
    );
  }

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
        tap((docente: any) => console.log(`Docente creado /id=${docente.id}`))
    );
  }

  borrarDocente(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/docentes/${id}`;

    return this.http.delete(url, {headers: Httpheader})
      .pipe(
        tap((docente: any) => console.log(`Docente eliminado /id=${id}`))
      );
  }

  getDocentesMateria(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}/docentes`;

    return this.http.get(url, {headers: Httpheader})
      .pipe(
        tap((docentes: any) => console.log(`fetched docentes id=${id}`))
      );
    }
  }