import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { APP_SERVICE_CONFIG, AppConfig} from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export interface AppConfig {
  apiEndpoint: string;
  featureFlag: boolean;
}

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.service.config');
export class RoomsService {
    roomslist:RoomList[] = [
    {
    roomnumber: 101,
    roomType: 'Single',
    amenities: 'AC, TV, Wifi',
    price: 1000,
    photo: 'single.jpg',
    checkIn: new Date('2020-01-01'),
    checkOut: new Date('2020-01-05'),
    rating: 4.5
  },{
    roomnumber: 102,
    roomType: 'Double',
    amenities: 'AC, TV, Wifi',
    price: 2000,
    photo: 'double.jpg',
    checkIn: new Date('2020-01-01'),
    checkOut: new Date('2020-01-05'),
    rating : 3.5
  },{
    roomnumber: 103,
    roomType: 'Suite',
    amenities: 'AC, TV, Wifi, Mini Bar',
    price: 3000,
    photo: 'suite.jpg',
    checkIn: new Date('2020-01-01'),
    checkOut: new Date('2020-01-05'),
    rating : 4.0
  }
  ]
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig ,private http: HttpClient ) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Services Initialized...');
  }
  // constructor(){
  //   console.log('Rooms Services Initialized...');
  // }
  getrooms(){
    return this.roomslist;
  }
}
