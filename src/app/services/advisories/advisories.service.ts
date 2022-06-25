import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from "rxjs";
import { Advisories } from 'src/app/models/advisories';
@Injectable({
  providedIn: 'root'
})
export class AdvisoriesService {
  basePath = 'http://localhost:3000/api/v1/advisories';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later.'));
  }

  // Create Advisory
  create(item: any): Observable<Advisories> {
    return this.http.post<Advisories>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get Advisory by id
  getById(id: any): Observable<Advisories> {
    return this.http.get<Advisories>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get all Advisories
  getAll(): Observable<Advisories> {
    return this.http.get<Advisories>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Advisories> {
    return this.http.put<Advisories>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Delete student
  delete(id: any): Observable<Advisories> {
    return this.http.delete<Advisories>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}
