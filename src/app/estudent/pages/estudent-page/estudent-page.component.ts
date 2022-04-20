import { Component, OnInit } from '@angular/core';
import { EstudentService } from '../../services/estudent.service';

@Component({
  selector: 'app-estudent-page',
  templateUrl: './estudent-page.component.html',
  styleUrls: ['./estudent-page.component.css']
})
export class EstudentPageComponent implements OnInit {

  

  constructor(private estudenService: EstudentService) { }



  ngOnInit(): void {
  }

}
