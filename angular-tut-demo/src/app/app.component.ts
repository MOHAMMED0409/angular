import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'angular-tut-demo';

  loginType = 'Admin';
  @ViewChild('user',{read: ViewContainerRef}) vcr!:ViewContainerRef;
  ngAfterViewInit() {
    const componentref = this.vcr.createComponent(RoomsComponent);
    componentref.instance.title = 'Room List is available' ;
  }

}
