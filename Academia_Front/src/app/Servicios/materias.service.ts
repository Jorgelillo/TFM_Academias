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

  crearMateria(nombre: String, nivel: String):Observable<any>{
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias`;
    const body = {
      "nivel": nivel,
      "nombre": nombre
    }

    return this.http.post(url, body, {headers: Httpheader})
      .pipe(
        tap((materia: any) => console.log(`Materia creada /id=${materia.id}`))
    )
  }

  borrarMateria(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/materias/${id}`;

    return this.http.delete(url, {headers: Httpheader})
      .pipe(
        tap((materia: any) => console.log(`Materia eliminada /id=${id}`))
      )
  }

}
