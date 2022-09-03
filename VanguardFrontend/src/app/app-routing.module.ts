import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { EntergoalComponent } from './entergoal/entergoal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditgoalComponent } from './editgoal/editgoal.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/navbar',
    pathMatch: 'full',
},

{ path:'entergoal', component: EntergoalComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'editgoal', component: EditgoalComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
