import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  // name of the tag we use in the index.html file
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // the component contents - the view - is here:
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// this would be the model/data:
export class AppComponent {
  title = 'Angular Core Deep Dive';
  data = {
    title: 'This is a title also'
  }
  onLogoClicked() {
    alert('Hello World!');
  }
  // so here the onKeyUp function receives var newTitle and 
  // modifies the model object data.title (on all elements that use it)
  // from 'This is a title also' to the title on the input object named #inputtitle
  onKeyUp(newTitle:string){
    this.data.title = newTitle;
  }
}
