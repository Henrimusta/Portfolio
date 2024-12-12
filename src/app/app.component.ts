import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProjectlistComponent } from "./pages/projectlist/projectlist.component";
import { BottomImageComponent } from "./components/bottom-image/bottom-image.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProjectlistComponent, BottomImageComponent],
  template: `
    <app-header/>
    <app-projectlist/>
    <app-bottom-image/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'portfolio';
}
