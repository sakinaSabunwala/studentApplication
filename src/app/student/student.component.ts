import { Component, OnInit } from '@angular/core';
import { StudentData } from '../studentData';
import { FormGroup } from '@angular/forms'
import { stuArray, stuJson } from '../studentArray';
import { StuService } from '../stu.service';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students = stuArray;
  student1;
  stu = stuJson;
  id: number;
  idUpdate:boolean;
  studentForm : FormGroup;

  stuData = new StudentData("sakina", "sabunwala", "gits", "15egics073", "dhvfhnv",1);
  submitted = false;
  constructor(private studentService: StuService ,private route: ActivatedRoute, private router: Router) { }

  
  
  onSubmit(studentForms) {
    if(this.idUpdate)
    {
      this.studentService.updateStudent(this.id,this.stuData).subscribe(data => this.router.navigate(['']));
    }
    else {
    this.submitted = true;
    this.studentService.addStudent(studentForms.value)
            .subscribe(data => {
              this.router.navigateByUrl(''); });
        }

    }

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) =>{
        this.id = parseInt(params.get('id'));
      })
      if (this.id) {
      this.idUpdate = true;
      this.studentService.getStudentByID(this.id).subscribe(data => this.stuData  = data);
      console.log(this.stuData);
      
      }
      else{
        this.idUpdate = false;
      }
  }

}
