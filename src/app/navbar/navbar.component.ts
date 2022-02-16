import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
ten : number = 10;
  constructor() { }
  addTen(){
    this.ten += 10;
  }

  ngOnInit(): void {
  }

}
