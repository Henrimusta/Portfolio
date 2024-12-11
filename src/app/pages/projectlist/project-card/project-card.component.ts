import { AfterViewInit, Component, ElementRef, input } from '@angular/core';
import { Project } from '../../../models/projects.model';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-project-card',
  imports: [],
  template: `
  <div class="cardRef">
  <div class="p-4 bg-red-200 shadow rounded-lg">
    <h2>{{ project().title}}</h2>
    <a [href]="project().description" target="_blank" class="text-blue-500 underline"> View on GitHub</a>
    <p>Language: {{ project().language }}</p>
  </div>
  </div>
  `,
  styles: `
    `
})
export class ProjectCardComponent implements AfterViewInit {
  project = input.required<Project>();

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.cardRef.nativeElement, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.cardRef.nativeElement,
        start: 'top 80%',
        end: 'top 50%',
      },
    });
  }

  constructor(private cardRef: ElementRef) { }

}
