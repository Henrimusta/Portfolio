import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProjectlistComponent } from "./pages/projectlist/projectlist.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProjectlistComponent],
  template: `
    <app-header/>
    <app-projectlist/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'portfolio';
}
