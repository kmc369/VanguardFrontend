import { Component, OnInit } from '@angular/core';
import { GoalServiceService } from '../goal-service.service';
import { Goal } from '../models/Goal';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  goalList: Array<Goal> = [];


  constructor(private service: GoalServiceService) {
  
   }

  ngOnInit(): void {
    this.service.findAll().subscribe((data)=>{
      this.goalList = data;
      console.log(this.goalList)

    });
  }

  dosomething(){
    
  }

}
