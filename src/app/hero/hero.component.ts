import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string= "More than just a Car Rental - Book Your Dream Car . Prepay & save money. ";
  heroText: string= "Fuel, parking, maintenance – it's on us! Our rates are all-inclusive and flexible to your needs. Whether it's for 2 minutes or 2 weeks, simply choose the most cost-saving rate in the app before each trip.";
  constructor() { }

  ngOnInit(): void {
  }

}
