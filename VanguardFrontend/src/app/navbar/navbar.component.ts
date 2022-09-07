import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/Goal';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  goal : Goal[] = [];
  user !: User;
  selectedFile=null;
  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  goToSaveGoal(){
   this.router.navigate(['/entergoal'])

  }

  editgoal(){
    this.router.navigate(['editgoal'])
  }

  onFileSelected(event){
  this.selectedFile = event.target.files[0];

  }

 

}
