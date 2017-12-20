import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LineaService {

  url: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) {
    this.url = this.config.api_url + "lineas/";
  }

  getLineas() {
    return this.http.get(this.url)
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getLineas", []))
      );
  }

  getLinea() {
    return this.http.get(this.url + "get_linea")
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getLinea", []))
      );
  }

  createLinea(linea) {
    return this.http.post(this.url + "create_linea", { linea: linea })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("createLinea", []))
      );
  }

  delLinea(id_linea) {
    return this.http.post(this.url + "del_linea/" + id_linea, {})
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("delLinea", []))
      );
  }

  updateLinea(id_linea, linea) {
    return this.http.post(this.url + "update_linea/" + id_linea, { linea: linea })
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
