import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
  <div class="group bg-red-200 shadow-md flex justify-center hover:bg-cyan-200 transition-colors duration-300">
    <div class="bg-cyan-200 flex px-5 py-5 absolute -left-1 group-hover:bg-red-200 transition-colors duration-300"></div>
        <div class="bg-cyan-200 px-5 flex justivy-center items-center -skew-x-12 border-r-8 border-white group-hover:bg-red-200 transition-colors duration-300">
          <p class="font-mono text-xs sm:text-md lg:text-lg px-2">portfolio</p>
        </div>
      <div class="flex justify-center items-center w-full h-full">
        <p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-light tracking-widest whitespace-nowrap text-center text-white"> 
          HENRI MUSTAKANGAS
        </p>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

}
