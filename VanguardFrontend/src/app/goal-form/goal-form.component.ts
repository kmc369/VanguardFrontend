import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalServiceService } from '../goal-service.service';
import { Goal } from '../models/Goal';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { ControlValueAccessor, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ignoreElements } from 'rxjs';
import  { ModalDismissReasons , NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { find } from 'rxjs';
import { User } from '../models/User';
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
  //editForm : FormGroup ;
  user: User = new User();

  editForm = new FormGroup({
    goalid: new FormGroup('', Validators.required),
    goalname: new FormGroup('', Validators.required),
    description: new FormGroup('', Validators.required),
    image: new FormGroup('', Validators.required),
    date: new FormGroup('', Validators.required),
    amount: new FormGroup('', Validators.required),
    saved: new FormGroup('', Validators.required),
    user: new FormGroup('', Validators.required),
          userid: new FormGroup(''),
          username: new FormGroup('')
  })



  constructor(private service: GoalServiceService,private modalService:NgbModal, private fb: FormBuilder ) {

   }

  ngOnInit(): void {
    this.service.findAll().subscribe((data)=>{
      this.goalList = data;
      console.log(this.goalList)
  
          
      this.editForm = this.fb.group({
        goalid: [''],
        goalname: [''],
        description: [''],
        image: [''],
        date: [''],
        amount: [''],
        saved: [''],
        user: {
              userid: [''], 
              username: ['']
        }
      } );

    
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

openEdit(targetModal, goal: Goal) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'lg'
 });

 this.editForm.patchValue({
  goalid: goal.id,  
  goalname: goal.name,
  description: goal.description,
  image: goal.image,
  date: goal.date,
  amount: goal.amount,
  saved: goal.saved,
  
  userid: goal.user.id,
  username: goal.user.username
  


});
console.log(this.editForm)

}




}
