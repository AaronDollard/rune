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
  itemData:OSRSItemResponse;
  errorMessage:any;
  item = [];

  constructor (private _osrsService:OsrsApiService){

  }

  getItemDetails(itemName:string) : boolean {
    this._osrsService.getItemData(itemName).subscribe(
      data => {
        this.itemData=data
        console.log('Item name: ' + this.itemData.name);
      },
      error => this.errorMessage ="Can not find item"
    );
  return false    
  }
}