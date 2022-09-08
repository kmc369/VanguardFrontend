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
  goal: Goal = new Goal()
  //id: number;
  closeResult:String;
  editForm :FormGroup;

 





  constructor(private service: GoalServiceService,private modalService:NgbModal, private fb: FormBuilder,private http: HttpClient) {

   }

  ngOnInit(): void {
    this.service.findAll().subscribe((data)=>{
      this.goalList = data;
      console.log(this.goalList)
    });

    this.editForm = this.fb.group({
      id : [' ', Validators.required],
    name: [' ', Validators.required],
    description: [' ', Validators.required],
    image: [' ', Validators.required],
    date: [' ', Validators.required],
    amount: [' ', Validators.required],
    saved: [' ', Validators.required],
     /* user: this.fb.group({
      userid: [' ', Validators.required],
      username: [' ', Validators.required],
    })*/
  });

  console.log(this.editForm)

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
    console.log(data)
    this.findAll()
  });



}

update(){



  this.service.editGoal(this.goal).subscribe(data=> {
    console.log(data)
    this.findAll();
  })
}


/*
  update(){
    let g = new Goal();
    console.log(this.editForm.value)
   
    g = this.editForm.value
    this.service.editGoal(g).subscribe(data=> {
   console.log(data)
  
      this.findAll();
    })
}
*/
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

 this.editForm.setValue({
   
  id: goal.id,  
  name: goal.name,
  description: goal.description,
  image: goal.image,
  date: goal.date,
  amount: goal.amount,
  saved: goal.saved,
  /*user:{
    userid: 2,
    username: 'kmc269'
    }*/
  })

  this.findAll();
  


}


onSave() {
  const editURL = 'http://localhost:8081/goals/' + this.editForm.value.id ;
  console.log(this.editForm.value);
  this.http.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}




}





/*
this.editform = this.fb.group({
    id : [' ', Validators.required],
  name: [' ', Validators.required],
  descr: [' ', Validators.required],
  image: [' ', Validators.required],
  date: [' ', Validators.required],
  amount: [' ', Validators.required],
  saved: [' ', Validators.required],
    user: this.fb.group({
    userid: [' ', Validators.required],
    username: [' ', Validators.required],
  })
});*/

  