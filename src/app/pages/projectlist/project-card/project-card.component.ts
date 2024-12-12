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
    <p class="p-4 font-light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In aspernatur velit repellat enim quia ipsam aperiam et temporibus itaque asperiores, facere voluptas, dolorum, incidunt debitis id labore dolorem perspiciatis neque!</p>
    <div class="flex justify-between items-center">
      <p class="text-sm font-thin">Written with {{ project().language }}</p>
      <app-button [href]="project().description" class=""label="GitHub"/>
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
