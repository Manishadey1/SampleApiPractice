import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SampleApi';
  users : any;
  constructor(private UserData : UsersDataService) {
    UserData.users().subscribe((data)=>{
    console.log('data',data);
    this.users=data;
    })
   }



}
