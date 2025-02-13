import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
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
  // constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig ) {
  //   console.log(this.config.apiEndpoint);
  //   console.log('Rooms Services Initialized...');
  // }
  constructor(){
    console.log('Rooms Services Initialized...');
  }
  getrooms(){
    return this.roomslist;
  }
}
