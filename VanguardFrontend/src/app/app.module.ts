import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

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

//matt icon
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    GoalFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    TableModule,
    ToastModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ToolbarModule,
    FileUploadModule,
    DialogModule,
    MatButtonModule,
    MatIconModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
