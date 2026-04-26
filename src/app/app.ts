import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Signup,ProfileComponent],
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

  showAlert(){
    alert("Hello Gauhar Nawab");
    console.log("Server Connected");
  }
}
