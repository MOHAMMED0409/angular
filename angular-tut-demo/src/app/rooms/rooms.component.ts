import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Rooms,RoomList} from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { title } from 'node:process';
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';
import { EmployeeComponent } from "../employee/employee.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent, EmployeeComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'] 
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Hilton';
  numberOfRooms = 10;
  hiddenroom = false;
  selectedRoom !: RoomList
 
  rooms : Rooms = {
    availablerooms: 10,
    bookedrooms: 5,
    totalrooms: 20
  }
  title = 'Room List';
  roomslist :RoomList[] =[];

  @ViewChild(HeaderComponent)
  headercomponent!: HeaderComponent;
  constructor(private roomsService : RoomsService){}

  ngAfterViewInit(): void {
    this.headercomponent.title = "Rooms View"
  }
  
  ngDoCheck(): void {
    console.log('DoCheck called');
  }

  toggle(){
    this.hiddenroom = !this.hiddenroom;
    this.title = 'Rooms List';
  }
  ngOnInit():void{
    //  console.log(this.headercomponent);
    this.roomslist = this.roomsService.getRooms();
}
  selectroom(room: RoomList){
    this.selectedRoom = room;
    // console.log(room)
  }

  addroom(){
    const room : RoomList ={
      roomnumber: 104,
      roomType:'Double',
      amenities:'AC, TV, Wifi',
      price: 2000,
      photo: 'double.jpg',
      checkIn: new Date('2020-03-09'),
      checkOut: new Date('2020-08-18'),
      rating: 3.6
    };
    // this.roomslist.push(room);
    this.roomslist = [...this.roomslist, room];
  }
  }
