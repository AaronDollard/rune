import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OSRSItemResponse } from '../osrsresponse';


@Injectable({
  providedIn: 'root'
})

export class OsrsApiService {

  private _url: string = "https://api.runelite.net/runelite-1.6.10.1/item/search?query="
  constructor(private _http: HttpClient) { }

  getItemData(itemName): Observable<OSRSItemResponse> {
    return this._http.get<OSRSItemResponse>(this._url + itemName)
    .pipe(
      tap(data => console.log(JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
  console.log('OsrsApiService: ' + err.message);
  return Observable.throw(err.message)
  }
}