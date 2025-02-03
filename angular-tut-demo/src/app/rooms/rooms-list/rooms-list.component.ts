import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule,RoomsListComponent],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit{
  @Input()
  rooms: RoomList[]=[];
  constructor(){ }
  ngOnInit():void{
  }
}
