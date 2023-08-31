import { Component, OnInit } from '@angular/core';
import { Disciplines, DisciplinesService } from './disciplines.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {
  public disciplines: Disciplines[] = [];

  constructor(private disciplineService: DisciplinesService) {}
  
  ngOnInit(): void {
    this.disciplineService.listDisciplines().subscribe(resp => {
      this.disciplines = resp;
    })
  }
  
}
