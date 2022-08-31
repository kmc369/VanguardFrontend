import { User } from "./User";

export class Goal {

  id : number;
  name: String;
  description: String;
  image: String;
  date: String
  amount: number;
  saved: number;
  user: User;
  
  
 constructor(id=0,name='Buy A Home',description='I want to buy a home costing 400k',image= 'image.jpe', date: string = '2000-01-01',amount=200.00,saved=5000.00, user: User=new User()){

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


