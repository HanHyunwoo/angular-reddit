import { Component } from '@angular/core';

// production모드 변경 Angular is running in the development mode. Call enableProdMode() to enable the production mode. 
import {enableProdMode} from '@angular/core';  
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
