import { User } from "./User";
import { GoalFormComponent } from "../goal-form/goal-form.component";
export class Goal {

  id : number;
  name: String;
  description: String;
  image: String;
  date: String
  amount: number;
  saved: number;
  user: User;
  
  
 constructor(id=0,name='',description='',image= '', date: string = '2022-09-12',amount=0.00,saved=0.00, user: User=new User()){

  this.id=id;
  this.name=name;
  this.description=description;
  this.image=image;
  this.date=date;
  this.amount=amount;
  this.saved=saved;
  this.user=user;
 }
}


