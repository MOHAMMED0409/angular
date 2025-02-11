import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule,RoomsListComponent],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges{
  @Input() rooms: RoomList[]=[];
  @Input () title: string = '';
  @Output() roomselect = new EventEmitter<RoomList>();
  constructor(){ }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit():void{
  }

  
  
  selectedroom(Room : RoomList){
    this.roomselect.emit(Room);
  }
}
