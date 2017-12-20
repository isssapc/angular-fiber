import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProyectoService {

  url: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) {
    this.url = this.config.api_url + "proyecto/";
  }

  getProyectos() {
    return this.http.get(this.url)
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getProyectos", []))
      );
  }

  getProyecto() {
    return this.http.get(this.url + "get_proyecto")
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getProyecto", []))
      );
  }

  createProyecto(proyecto) {
    return this.http.post(this.url + "create_proyecto", { proyecto: proyecto })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("createProyecto", []))
      );
  }

  delProyecto(id_proyecto) {
    return this.http.post(this.url + "del_proyecto/" + id_proyecto, {})
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("delProyecto", []))
      );
  }

  updateProyecto(id_proyecto, proyecto) {
    return this.http.post(this.url + "update_proyecto/" + id_proyecto, { proyecto: proyecto })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("updateProyecto", []))
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