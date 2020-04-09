import { Component } from '@angular/core';
import { OsrsApiService } from './services/osrsapi.service';
import { OSRSItemResponse } from './osrsresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OsrsApiService]
})

export class AppComponent {
  item:any;
  errorMessage:any

  constructor (private _osrsService:OsrsApiService){
    
  }

  getItemDetails(itemName:string) : boolean {
    this._osrsService.getItemData(itemName).subscribe(
      data => {
        this.item = data
        console.log('Item: ' + this.item.name);
      },
      error => this.errorMessage = <any>error
    );
  return false    
  }
}