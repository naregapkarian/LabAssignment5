import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName = 'Nareg';
  private lastName = 'Apkarian';


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  showGreeting() {
    const row2 = document.getElementById("R1C2");
    row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
  }

  resetGreeting() {
    const row2 = document.getElementById("R1C2");
    row2.innerHTML = "R1C2";
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
