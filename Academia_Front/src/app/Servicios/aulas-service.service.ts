import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AulasServiceService {

  constructor(
    private http: HttpClient) { }

  /*
* Función que obtiene todas las aulas de la bbdd
*/    
public getAulas(): Observable<any[]> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = 'http://localhost:8080/aulas';

  return this.http.get<any[]>(url, {headers: Httpheader})
    .pipe(
      tap(_ => console.log('fetched aulas'))
    );  
  }

/*
*Función que obtiene una de las Aulas de la bbdd
* @param id del aula
*/
public getAula(id: number): Observable<any> {
  const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
  const url = `http://localhost:8080/aulas/${id}`;

  return this.http.get(url, {headers: Httpheader })
    .pipe(
        tap(aulas => console.log(`fetched aulas id=${id}`))
    );
  }

  crearAula(nombre: string, codigo: string, capacidad: number):Observable<any>{
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/aulas`;
    const body = {
      "nombre": nombre,
      "codigo": codigo,
      "capacidad": capacidad
    }

    return this.http.post(url, body, {headers: Httpheader})
      .pipe(
        tap((aula: any) => console.log(`Aula creado /id=${aula.id}`))
    )
  }

  borrarAula(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/aulas/${id}`;

    return this.http.delete(url, {headers: Httpheader})
      .pipe(
        tap((aula: any) => console.log(`Aula eliminada /id=${id}`))
      )
  }

  modificarAulas(id: number, capacidad: number, nombre: string, codigo: string): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/aulas/${id}/`;
    const body = {
      'capacidad': capacidad,
      'nombre': nombre, 
      'codigo': codigo
    }

    return this.http.patch<any>(url, body, {headers: Httpheader}).pipe(
      tap( _=> console.log(`Aula modificada`))
    );
  }

  getHorarios(id: number): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `http://localhost:8080/aulas/${id}/horarios`;

    return this.http.get<any>(url, {headers: Httpheader}).pipe(
      tap( _=> console.log(`fetched horarios aula id ${id}`))
    );
  }

  getAulaHorario(url: string): Observable<any> {
    const Httpheader = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.get<any>(url, {headers: Httpheader}).pipe(
      tap( _=> console.log(`fetched aula de horario`))
    );
    }

}
