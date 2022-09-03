import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/Goal';
import { GoalFormComponent } from '../goal-form/goal-form.component';
import { GoalServiceService } from '../goal-service.service';
@Component({
  selector: 'app-entergoal',
  templateUrl: './entergoal.component.html',
  styleUrls: ['./entergoal.component.css']
})
export class EntergoalComponent implements OnInit {

  goal !:Goal;
  constructor(private service : GoalServiceService) { }

  ngOnInit(): void {
  }

  save(goal:Goal){
    this.service.save(goal).subscribe(data =>{
      console.log
    });
  }

}
