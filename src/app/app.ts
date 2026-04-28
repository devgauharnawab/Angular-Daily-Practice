import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile.component';
import { log } from 'node:console';

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

  //* Perform Operations for data types in Angular *//
  //decalare a new property for performing operations
  email : string = "gauharnawab123@gmail.com";
  //*we use to store multiple data type in a single property using |
  data : string | number = 50;
  getName(){
    return this.name;
  }

  showAlert(){
    alert("Hello Gauhar Nawab");
    console.log("Server Connected");
  }

  //make a function to performing operations on data types
  performDataTypesOperations(){
    this.email = "newemail@example.com";
    console.log("Updated Email: " + this.email);
    console.log("Data :" + this.data);
  }

  //* perform operations on Button 

  addNumbers(num1: number, num2: number){
    console.log(num1 + num2);
  }
}
