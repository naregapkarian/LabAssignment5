import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabAssignment3';

    private firstName = 'Nareg';
    private lastName = 'Apkarian';
  

    showGreeting() {
        const row2 = document.getElementById("R1C2");
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
}

    resetGreeting() {
        const row2 = document.getElementById("R1C2");
        row2.innerHTML = "R1C2";
    }


}
