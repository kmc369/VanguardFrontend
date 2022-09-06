import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/Goal';
import { GoalFormComponent } from '../goal-form/goal-form.component';
import { GoalServiceService } from '../goal-service.service';
import { User } from '../models/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entergoal',
  templateUrl: './entergoal.component.html',
  styleUrls: ['./entergoal.component.css']
})
export class EntergoalComponent implements OnInit {

  goal :Goal = new Goal();
  user :User = new User();
  constructor(private service : GoalServiceService, private router :Router) { }

  ngOnInit(): void {
  }

  save(goal:Goal){
    this.service.save(goal).subscribe(data =>{
      console.log
    });

  }

  gohome(){
    this.router.navigate(['']);
  }

}
