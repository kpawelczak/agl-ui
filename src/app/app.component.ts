import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',

})
export class AppComponent {

    public Primary = "Primary"
    public Secondary = "Secondary"

    status: boolean = false;

    toggle_class() {

        this.status = !this.status;

    }
}
