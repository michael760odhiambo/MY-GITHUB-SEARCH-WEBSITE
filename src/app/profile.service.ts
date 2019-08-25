import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '587a930f96636dfbbe51';
  private clientsecret = '7b70fdc28025df444d73fb8baad2190a34550498';

  constructor(private http:HttpClient) { 
    console.log("service is ready");
    this.username = 'michael760odhiambo'
   }

   getProfileInfo(){
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    //.map(res => res.json());

   }
   getProfileRepos(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    //.map(res => res.json());
   }

   upDateProfile(username:string){
     this.username = username;

   }
}
