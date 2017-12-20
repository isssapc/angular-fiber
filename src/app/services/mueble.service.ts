import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class MuebleService {

  url: string;

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) {
    this.url = this.config.api_url + "muebles/";
   }

  getMuebles() {
    return this.http.get(this.url)
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getMuebles", []))
      );
  }

  getMueble() {
    return this.http.get(this.url + "get_mueble")
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("getMueble", []))
      );
  }

  createMueble(mueble) {
    return this.http.post(this.url + "create_mueble", { mueble: mueble })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("createMueble", []))
      );
  }

  delMueble(id_mueble) {
    return this.http.post(this.url + "del_mueble/" + id_mueble, {})
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("delMueble", []))
      );
  }

  updateMueble(id_mueble, mueble) {
    return this.http.post(this.url + "update_mueble/" + id_mueble, { mueble: mueble })
      .pipe(
      tap(response => console.log("response", response)),
      catchError(this.handleError("updateMueble", []))
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
