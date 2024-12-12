import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-bottom-image',
  imports: [],
  template: `
    <div class="image-container">
      <img src="/assets/abstract.png" alt="Abstract design" id="image" class="hidden-image" />
    </div>
   `,
  styles: `
  
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;  
  }

  .hidden-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  `
})
export class BottomImageComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const triggerHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= triggerHeight) {
      const imageElement = document.getElementById('image');
      if (imageElement) {
        imageElement.classList.add('visible-image');
      }
    }
  }

}
