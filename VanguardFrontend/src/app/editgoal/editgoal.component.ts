import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/Goal';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalServiceService } from '../goal-service.service';

@Component({
  selector: 'app-editgoal',
  templateUrl: './editgoal.component.html',
  styleUrls: ['./editgoal.component.css']
})
export class EditgoalComponent implements OnInit {

  id: number;
  goal:Goal = new Goal();

  
  constructor(private service: GoalServiceService, private router: Router, private route : ActivatedRoute) { 

  }

  ngOnInit(): void {
 
    
  }

  update(){

    this.service.editGoal(this.goal).subscribe(date=> {
      console.log(date)
    })


  }

  gohome(){
    this.router.navigate(['']);
  }



}
