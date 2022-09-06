import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalServiceService } from '../goal-service.service';
import { Goal } from '../models/Goal';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { FormGroup, NgForm } from '@angular/forms';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  goalList: Array<Goal> = [];
  id !:number;
  goal: Goal = new Goal();
  @ViewChild('goalform') form : FormGroup;

  constructor(private service: GoalServiceService) {

   }

  ngOnInit(): void {
    this.service.findAll().subscribe((data)=>{
      this.goalList = data;
      console.log(this.goalList)

    });
  }

  findAll(){
    this.service.findAll().subscribe((data)=>{
      this.goalList=data;
      
    });
  }

  deleteRow(goal:Goal){
    this.service.deleteRow(goal.id).subscribe(data=>{
      console.log('success',data)
      this.findAll();
    })
}

edit(goal:any){
  goal.isEdit = true;

}

/*update(goal:Goal,id:number){

this.service.editGoal(goal,goal.id).subscribe(data =>{
  console.log('success',data)
})
 
}*/


save(goal:Goal){
  this.service.save(goal).subscribe(data =>{
    console.log
  });

}

editGoal(id:number){

}
}
