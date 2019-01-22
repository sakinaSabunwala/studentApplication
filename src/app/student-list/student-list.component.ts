import { Component, OnInit } from '@angular/core';
import { stuArray, stuJson } from '../studentArray';
import { StuService } from '../stu.service'
import { StudentData } from '../studentData';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  selectindex;
  student = stuArray;
  student1;
  studentsJson: StudentData[];
  students: any[];

  

  constructor(private router: Router,private studdentservice: StuService) { }

  // getStudent(): void {
  //   this.stuService.getStudent
  //   //this.student1 = this.studdentservice.getStudent();
    
  // }

  onSelect(id) {
    this.router.navigate(['/edit',id]);

  }

 

  ngOnInit() {
    this.studdentservice.getStudent().
      subscribe((students) => {this.studentsJson = students; })

  }
  onDelete(id): void {
    this.studdentservice.deleteStudent(id)
    .subscribe(
      (students) => { this.students = this.students.filter((x) => x !== students);})
    }

  
}