import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OSRSitem } from '../osrsresponse';


@Injectable({
  providedIn: 'root'
})
//In this service I say what I want to do when communicating with the RestAPI and what to do
//with the results of that request
export class OsrsApiService {

  private _url: string = "https://api.osrsbox.com/"
  constructor(private _http: HttpClient) { }

  //Writes the items as one object or string into the console.log
  public getItemData(itemName): Observable<OSRSitem[]> {
    return this._http.get<OSRSitem[]>(this._url + 'items?where={ "name":"' + itemName +'" , "duplicate": false}')
    .pipe(
      tap(data => console.log(JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse) {
  console.log('OsrsApiService: ' + error.message);
  return Observable.throw(error.message)
  }
}