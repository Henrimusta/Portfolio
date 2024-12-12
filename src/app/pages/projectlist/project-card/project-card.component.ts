import { AfterViewInit, Component, ElementRef, input } from '@angular/core';
import { Project } from '../../../models/projects.model';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-project-card',
  imports: [ButtonComponent],
  template: `
  <div class="cardRef">
    <div class="p-4 bg-red-200 shadow rounded-lg">
      <h2 class="p-4 flex justify-center text-center tracking-widest">{{ project().title}}</h2>
      <div class="post-it">
        <div class="py-10 px-8 bg-yellow-200 shadow-md" >
          <p class="pb-6 font-light">{{ project().description }}</p>
        </div>
      </div>
      <div class="pt-10 flex justify-between items-center">
        <p class="text-sm font-thin">Written with {{ project().language }}</p>
        <app-button [href]="project().link" class=""label="GitHub"/>
      </div>
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
