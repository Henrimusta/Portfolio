import { Component, signal } from '@angular/core';
import { Project } from '../../models/projects.model';
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-projectlist',
  imports: [ProjectCardComponent],
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
  @for (project of projects(); track project.id) {
    <app-project-card [project]="project"></app-project-card>
  }
  </div>
  `,
  styles: `
  `
})
export class ProjectlistComponent {
  projects = signal<Project[]>([]);

  async ngOnInit() {
    const res = await fetch('https://api.github.com/users/Henrimusta/repos');
    const data = await res.json();
    console.log(data);

    const mappedProjects = data.map((repo: any, index: number) => ({
      id: index + 1,
      title: repo.name,
      description: repo.description,
      language: repo.language,
      link: repo.html_url,
    }))
    this.projects.set(mappedProjects);
  }
}
