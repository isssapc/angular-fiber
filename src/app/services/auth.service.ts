import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  url: string;
  lsToken: string = "token";
  lsUser: string = "usuario";

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) {
    this.url = this.config.api_url + "auth/";
  }

  login(usuario) {
    return this.http.post(this.url + 'login', { usuario: usuario })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("login", []))
      );
  }

  logout() {
    localStorage.removeItem(this.lsToken);
    localStorage.removeItem(this.lsUser);
    console.log("loggedout");
  }

  loggedIn() {
    //return tokenNotExpired();
  }

  getUsuario() {
    let strUsuario = localStorage.getItem(this.lsUser);

    if (strUsuario) {
      let usuario = JSON.parse(strUsuario);
      return usuario;
    } else {
      return null;
    }
  }

  getToken() {
    return localStorage.getItem(this.lsToken);
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message} (${error.status}- ${error.statusText})`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
