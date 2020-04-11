import { Component } from '@angular/core';
import { OsrsApiService } from './services/osrsapi.service';
import { OSRSitem } from './osrsresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OsrsApiService]
})

export class AppComponent {
  item: OSRSitem[]
  errorMessage: any
  objectKeys = Object.keys;

  constructor(private _osrsService: OsrsApiService) {
  }

  ngOnInit() {
  }

  getItemDetails(itemName: string): boolean {
    this._osrsService.getItemData(itemName).subscribe
      (
        data => {
          this.item = data
          console.log(data);
        },
        error => this.errorMessage = <any>error
      );
    return false
  }
}