import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component'
import { StudentListComponent} from './student-list/student-list.component'


const routes: Routes = [
  {path: '', redirectTo: 'studentList', pathMatch: 'full'},
  {path : 'studentList' , component : StudentListComponent},
  {path :'addStudent', component:StudentComponent},
  {path :'edit/:id', component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
