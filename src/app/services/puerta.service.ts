import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PuertaService {

  url: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) {
    this.url = this.config.api_url + "puerta/";
  }

  getPuertas() {
    return this.http.get(this.url)
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getPuertas", []))
      );
  }

  getPuerta() {
    return this.http.get(this.url + "get_puerta")
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getPuerta", []))
      );
  }

  createPuerta(puerta) {
    return this.http.post(this.url + "create_puerta", { puerta: puerta })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("createPuerta", []))
      );
  }

  delPuerta(id_puerta) {
    return this.http.post(this.url + "del_puerta/" + id_puerta, {})
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("delPuerta", []))
      );
  }

  updatePuerta(id_puerta, puerta) {
    return this.http.post(this.url + "update_linea/" + id_puerta, { puerta: puerta })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("updatePuerta", []))
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