import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";

//forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//primeng
import { AccordionModule} from 'primeng/accordion';    
import { MenuItem} from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule} from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

//components
import { AppComponent } from './app.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntergoalComponent } from './entergoal/entergoal.component';
import { NavbarComponent } from './navbar/navbar.component';

//matt materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';


//matt forms

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    GoalFormComponent,
    NavbarComponent,
    EntergoalComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    TableModule,
    ToastModule,
    MatToolbarModule,
    FileUploadModule,
    DialogModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    
    MatFormFieldModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatSelectModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
