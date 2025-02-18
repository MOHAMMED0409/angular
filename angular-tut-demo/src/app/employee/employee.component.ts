import { Component } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers : [RoomsService]
})
export class EmployeeComponent {
empname: string ='Khashif';
constructor(private roomsService: RoomsService){}
}
