import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = 'http://localhost:8080/api/call';
  private options:any = {
    responseType: 'text'
  };
  constructor(private http: HttpClient) { }
  
  pruebaGet(): Observable<any>{
    const res: Observable<any> = this.http.get<any>(this.url, this.options)
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
