import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../interface/student.interface';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  @Input() listStudents: Student[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
