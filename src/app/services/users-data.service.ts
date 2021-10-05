import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

url =  "https://random-data-api.com/api/color/random_color";

  constructor(private httpClient : HttpClient) { }

users(){
  console.log(this.url);
  
  return this.httpClient.get(this.url);

}

}
