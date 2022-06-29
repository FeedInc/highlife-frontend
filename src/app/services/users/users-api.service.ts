import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from "rxjs";
import { IUser} from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  port = 3000;
  basePath = `https://my-json-server.typicode.com/FeedInc/highlife-frontend/users`;
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

  // Create IUser
  createUser(item: any): Observable<IUser> {
    return this.http.post<IUser>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllUsers() {
    return this.http.get(this.basePath, this.httpOptions);
  }

  getUser(idValue: string) {
    return this.http.get(`${this.basePath}/${idValue}`, this.httpOptions);
  }

  updateUser(idValue: string, userUpdate: any) {
    return this.http.put(`${this.basePath}?id.value=${idValue}`, JSON.stringify(userUpdate), this.httpOptions)
  }

  deleteUser(idValue: string) {
    return this.http.delete(`${this.basePath}?id.value=${idValue}`, this.httpOptions)
  }
}
