import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(
    private http: HttpClient) { }

public getMaterias(): Observable<any[]> {
  const header = new HttpHeaders({ ' Content-Type': 'application/json'});

  return this.http.get<any[]>('http://localhost:8080/materias')
    .pipe(

    );  
  }
}
