import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url: string = '/api/auth';
  private httpOptions: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  
  authAdmin(password: string): Observable<any>{
    const bodyRequest: {username: string, password: string} = {username: 'admin', password: password};

    const res: Observable<any> = this.http.post<any>(this.url, bodyRequest, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('authAdmin'))
    );

    return res;
  }

  pruebaGet(): Observable<any>{
    const res: Observable<any> = this.http.get<any>(this.url, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('test',null))
    );

    return res;
  }

  private handleError<Type>(operation = 'operation', result?: Type) {
    return (error: any): Observable<Type> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as Type);
    };
  }
}
