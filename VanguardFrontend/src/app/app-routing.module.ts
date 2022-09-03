import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalFormComponent } from './goal-form/goal-form.component';
const routes: Routes = [

  {
    path: '', component: GoalFormComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
