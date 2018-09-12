import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  pageTitle = 'Projects';

  projectsTest = [
    new Project('Proyecto 1', '2018-09-01','2018-09-21'),
    new Project('Proyecto 2', '2018-09-01','2018-09-21'),
    new Project('Proyecto 3', '2018-09-01','2018-09-21'),
    new Project('Proyecto 4', '2018-09-01','2018-09-21')
  ];

  private dataList;

  constructor() { }

  ngOnInit() {
  }

}

export class Project {
  constructor(
    public name: string,
    public started_at: string,
    public finish_at: string) { }
}
