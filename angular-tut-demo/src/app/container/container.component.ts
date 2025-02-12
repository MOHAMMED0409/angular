import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, AfterContentInit {
  
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    console.log(this.employee);
  }

}
