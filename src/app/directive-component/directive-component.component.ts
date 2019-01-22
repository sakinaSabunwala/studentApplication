import { Component, OnInit, Input } from '@angular/core';
import { StudentData } from '../studentData';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.scss']
})
export class DirectiveComponentComponent implements OnInit {

  constructor() { }

  @Input('fname') fname : any

  @Input('lname') lname :any

  @Input('cllgname') cllgname: any

  @Input('rollno') rollno : any

  @Input('address') address: any

  
  ngOnInit() {
   // console.log(this.value);
  }

}
