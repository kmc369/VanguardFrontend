import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalServiceService } from '../goal-service.service';
import { Goal } from '../models/Goal';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ignoreElements } from 'rxjs';
import  { ModalDismissReasons , NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { find } from 'rxjs';
import { User } from '../models/User';
import { __values } from 'tslib';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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

  editForm :FormGroup;

 





  constructor(private service: GoalServiceService,private modalService:NgbModal, private fb: FormBuilder,private http: HttpClient) {

   }

  ngOnInit(): void {
    this.service.findAll().subscribe((data)=>{
      this.goalList = data;
      console.log(this.goalList)
    });

    this.editForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      descr: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      saved: new FormControl('', Validators.required),
     
     user: new FormGroup({
        userid: new FormControl('', Validators.required),
        username: new FormControl('',Validators.required),
  })
  })

  console.log(this.editForm)



 
  }







  userForm(){
    return this.fb.group({
      userid:[''],
      username:['']
    })
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
    this.findAll();
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
  id: goal.id,  
  name: goal.name,
  descr: goal.description,
  image: goal.image,
  date: goal.date,
  amount: goal.amount,
  saved: goal.saved,
  user:{
    userid: 2,
    username: 'kmc269'
    }
  });

  this.findAll();
  


}






onSave(){
 


  const editURL = 'http://localhost:8081/goals/' + this.editForm.value.id ;
  

  this.http.put(editURL, this.editForm.value)
    .subscribe((results) =>  {
      
      this.ngOnInit();
      this.modalService.dismissAll();

      this.goal.id=this.editForm.value.id;
      this.goal.name=this.editForm.value.name;
      this.goal.description=this.editForm.value.descr;
      this.goal.image=this.editForm.value.image;
      this.goal.date=this.editForm.value.date;
      this.goal.amount=this.editForm.value.amount;
      this.goal.saved=this.editForm.value.saved;
      this.goal.user.id = this.editForm.value.user.userid
      this.goal.user.username=this.editForm.value.username

    });

  

  
}







}



/*
    this.editForm = this.fb.group({
      id: [''],
      name: [''],
      descr: [''],
      image: [''],
      date: [''],
      amount: [''],
      saved: [''],
      user: this.fb.group(this.userForm()),
      
    } );
    console.log(this.editForm);*/

