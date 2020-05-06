import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
