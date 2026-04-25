import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',//we can replace the html file when needed
  //template: `<h1>{{age}}</h1>`, //this is inline template
  styleUrl: './app.css'
})
export class App {
  //these are called properties
  //with the help of interpolation we can bind the properties in User Interface
  protected title = 'my-angular-app-day1';
  age = 20;
  name =  "Gauhar Nawab";
  getName(){
    return this.name;
  }
}
