import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
  <a 
  [href] = "href()"
  target = "_blank"
  class="bg-cyan-200 text-white rounded-md px-4 py-2 border-2 border-white">{{ label() }}</a>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input.required<string>();
  href = input.required<string>();
}
