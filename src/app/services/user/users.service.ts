import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Users} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  basePath= 'http://localhost:3131/api/v1/users';

  // HTTP Default Options
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'})}
  constructor(private http: HttpClient) {}

  // API error Handling
  handleError(error: HttpErrorResponse): Observable<never> {
    if(error.error instanceof ErrorEvent){
      console.log('An error occurred: ', error.error.message);
    } else{
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  // Create Users
  addUsers(item: any): Observable<Users> {
    return this.http.post<Users>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get Users by Id
  getUsersById(id:number): Observable<Users>{
    return this.http.get<Users>(`{this.basePath}/${id}`)
      .pipe(retry(2), catchError (this.handleError));
  }

  //Get Users Data
  getAllUsers(): Observable<Users>{
    return this.http.get<Users>(this.basePath)
      .pipe(retry(2),catchError(this.handleError));
  }

  //Update Users
  updateUsers (id: number, item:Users): Observable<Users>{
    return this.http.put<Users>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }
  //Delete Users
  deleteUsers (id: number): Observable<Users>{
    return this.http.delete<Users>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

}
