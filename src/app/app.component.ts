import { Component } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';
import { MapsAPILoader } from "@agm/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  destAddress = '';
}
