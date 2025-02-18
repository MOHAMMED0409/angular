import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
 roomslist : RoomList [] = [
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
  constructor() {
    console.log('Rooms Service Initialization...');
   }
  getRooms(){
    return this.roomslist;
  }
}
