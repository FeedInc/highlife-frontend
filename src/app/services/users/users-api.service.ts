import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from "rxjs";
import { Users} from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  port = 3000;
  basePath = `http://localhost:${this.port}/api/v1/users`;
  //pass automatically to attribute. Generate 2 instances the value you pass and the value yo get.
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`An error ocurred: ${error.error.message}`)
    }
    else {
      console.error( `API returns code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error(`Something happened with request, please try again later`));
  }

  // Create Users
  addUsers(item: any): Observable<Users> {
    return this.http.post<Users>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllUsers() {
    return this.http.get(this.basePath, this.httpOptions);
  }

  getUser(idValue: string) {
    return this.http.get(`${this.basePath}/${idValue}`, this.httpOptions);
  }

  createUser(newUser: any) {
    return this.http.post(`${this.basePath}`, JSON.stringify(newUser) ,this.httpOptions)
  }

  updateUser(idValue: string, userUpdate: any) {
    return this.http.put(`${this.basePath}?id.value=${idValue}`, JSON.stringify(userUpdate), this.httpOptions)
  }

  deleteUser(idValue: string) {
    return this.http.delete(`${this.basePath}?id.value=${idValue}`, this.httpOptions)
  }
}
