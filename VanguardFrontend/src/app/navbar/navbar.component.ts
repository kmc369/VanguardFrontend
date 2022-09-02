import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/Goal';
import { User } from '../models/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  goal : Goal[] = [];
  user !: User;
  constructor() { }

  ngOnInit(): void {
  }

}
