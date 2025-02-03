import { Component } from '@angular/core';
import { Rooms,RoomList} from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'] 
})
export class RoomsComponent {
  hotelName = 'Hilton';
  numberOfRooms = 10;
  hiddenroom = false;
  toggle(){
    this.hiddenroom = !this.hiddenroom;
  }
  rooms : Rooms = {
    availablerooms: 10,
    bookedrooms: 5,
    totalrooms: 20
  }

  roomslist :RoomList[] =[];
  constructor(){}

  ngOnInit():void{
    this.roomslist = [
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
  }
}
