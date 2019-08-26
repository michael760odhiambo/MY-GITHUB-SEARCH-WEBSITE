import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
 //import { Repos } from '../repos/profile.sevices';






















@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  repos:any;
  username:string;
  completeDate= new Date('{{deployments_url}}')

  constructor(private ProfileService:ProfileService) { 
  
  }
  findProfile(){
    this.ProfileService.upDateProfile(this.username);
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    })

    this.ProfileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
   })

  }

  ngOnInit(

  ){ 

   }
  }
