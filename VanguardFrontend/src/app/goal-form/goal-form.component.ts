import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalServiceService } from '../goal-service.service';
import { Goal } from '../models/Goal';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { FormGroup, NgForm } from '@angular/forms';
import { ignoreElements } from 'rxjs';
import  { ModalDismissReasons , NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { find } from 'rxjs';
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  goalList: Array<Goal> = [];
  goal: Goal = new Goal();
  id: number;
  closeResult:String;


  constructor(private service: GoalServiceService,private modalService:NgbModal) {

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
    this.findAll()
  });



}

update(){

  this.service.editGoal(this.goal).subscribe(date=> {
    console.log(date)
  })

}

open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}



}
