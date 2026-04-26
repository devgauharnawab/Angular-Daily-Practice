import { Component } from '@angular/core';

//*This is a profile component(which is called custom component) this is a major component of angular
//*  we can create as many components as we want in angular and we can use them in our application as per our requirement. *//

//added dependency injection for the profile component

@Component({
    selector: 'app-profile',
    template: `<h1 style="color : green">This is a Profile Component inside template </h1>`,
})

export class ProfileComponent {

}