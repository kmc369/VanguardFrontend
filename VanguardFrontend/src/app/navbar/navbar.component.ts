import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/Goal';
import { User } from '../models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  goal : Goal[] = [];
  user !: User;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSaveGoal(){
   this.router.navigate(['/entergoal'])

  }

  editgoal(){
    this.router.navigate(['editgoal'])
  }

}
