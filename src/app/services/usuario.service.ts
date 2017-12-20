import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class usuarioService {

  url: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) {
    this.url = this.config.api_url + "usuario/";
  }

  getusuarios() {
    return this.http.get(this.url)
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getusuarios", []))
      );
  }

  getUsuario() {
    return this.http.get(this.url + "get_usuario")
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getUsuario", []))
      );
  }

  createUsuario(usuario) {
    return this.http.post(this.url + "create_usuario", { usuario: usuario })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("createUsuario", []))
      );
  }

  delUsuario(id_usuario) {
    return this.http.post(this.url + "del_usuario/" + id_usuario, {})
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("delUsuario", []))
      );
  }

  updateusuario(id_usuario, usuario) {
    return this.http.post(this.url + "update_usuario/" + id_usuario, { usuario: usuario })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("updateLinea", []))
      );
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