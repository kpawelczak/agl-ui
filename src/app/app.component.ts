import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',  

})
export class AppComponent {

    Primary = {"Primary": true}  

    status: boolean = false;

    toggle_class(){
  
        this.status = !this.status;

    }
}
