import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './models/Goal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {

  url = 'http://localhost:8081/goals/allGoals';

  constructor(private httpclient : HttpClient) {

   }

   findAll(): Observable<Goal[]>{
    return this.httpclient.get<Goal[]>(this.url)
   }
   save(goal : Goal){
    return this.httpclient.post<Goal>(this.url,goal)
   }
}
