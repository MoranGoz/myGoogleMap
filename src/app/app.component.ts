import { Component,OnInit } from '@angular/core';
//google
import { google } from '@agm/core/services/google-maps-types';
import { MapsAPILoader } from "@agm/core"
//material
import { MatTableDataSource } from '@angular/material';
//jQuery
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 32.07762926680949;
  lng: number = 34.79069709777832;
  zoom: 13;
  closestSupermarket = [] ;
  search = 0;
  displayedColumns = [];
  JSONData=[];
  //get location 

  public handleAddressChange(address) {
     console.log(address);
    this.lng = address.geometry.viewport.b.b
    this.lat = address.geometry.viewport.f.b
  }  

  OnInit(){
    console.log('hhhh');
    this.JSONData = JSON.parse('./data.json');
    console.log(this.JSONData);
  }
 
  

//////////////////////////////////////////////////////
// //calculat distans and put in array
  // findClosestLocation(){
  //   for
  //   if var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
  //   if dist>=50;
  // }
  // //sort
  // sortByDistans(){

  // }

  // //clear fileds after search
  // clear(){
  //   this.closestSupermarket=[];
  //   this.search = 0;
  // }
}
