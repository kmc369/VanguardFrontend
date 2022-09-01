import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './models/Goal';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {



  constructor(private httpclient : HttpClient) {

   }

   findAll(): Observable<Goal[]>{
    return this.httpclient.get<Goal[]>(environment.findAllUrl)
   }
   save(goal : Goal){
    //return this.httpclient.post<Goal>(this.url,goal)
   }

   deleteRow(id:number){
     return this.httpclient.delete(environment.deleteUrl +id)
   
   }
}
