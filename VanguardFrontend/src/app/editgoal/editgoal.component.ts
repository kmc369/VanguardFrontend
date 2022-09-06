import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/Goal';
import { Router } from '@angular/router';
import { GoalServiceService } from '../goal-service.service';

@Component({
  selector: 'app-editgoal',
  templateUrl: './editgoal.component.html',
  styleUrls: ['./editgoal.component.css']
})
export class EditgoalComponent implements OnInit {

  goal:Goal = new Goal();
  constructor(private service: GoalServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  update(goal:Goal){
    this.service.editGoal(goal).subscribe(date=> {
      console.log(date)
    })


  }

  gohome(){
    this.router.navigate(['']);
  }

}
