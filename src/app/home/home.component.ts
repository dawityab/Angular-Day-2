import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  car = new FormGroup({
      id: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      seat: new FormControl('',Validators.required),
      year: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required)
  });


  cars: Array<{id:number,name:string,model:string,seat:number,year:number,image:string}> = [{
    id: 1,
    name:"BMW 3 Series",
    model:"320i Sedan",
    seat:5,
    year:2016,
    image:"https://cdn.ebizautos.media/used-2016-bmw-3_series-320i-11921-21235641-1-640.jpg"
},
{
    id: 2,
    name:"Cadillac SRX",
    model:"FWD 4dr",
    seat:5,
    year:2014,
    image:"https://stockphotos.ebizautos.media/chromeimagegallery/2014cad004a_640/colormatched_white/1791/1.jpg"
},
{
  id: 3,
  name:"FIAT 500e",
  model:"2dr Hatchback coupe",
  seat:5,
  year:2013,
  image:"https://cdn.ebizautos.media/used-2013-fiat-500e_battery_electric-2drhatchback-11921-21232812-1-640.jpg"
},
{
  id: 4,
  name:"Ford Edge",
  model:"4dr Sport",
  seat:5,
  year:2011,
  image:"https://cdn.ebizautos.media/used-2011-ford-edge-4drsportfwd-11921-21239365-1-400.jpg"
},
{
  id: 5,
  name:"Chevrolet Silverado",
  model:"2WD Double Cab",
  seat:5,
  year:2014,
  image:"https://cdn.ebizautos.media/used-2014-chevrolet-silverado_1500-2wddoublecab1435ltw1lt-11921-21199225-1-640.jpg"
},
{
  id: 6,
  name:"Toyota Camry",
  model:"LE Automatic Sedan",
  seat:5,
  year:2017,
  image:"https://cdn.ebizautos.media/used-2017-toyota-camry-leautomatic-11921-21231176-1-400.jpg"
},
{
  id: 7,
  name:"Toyota Corolla",
  model:"L Sedan",
  seat:5,
  year:2018,
  image:"https://cdn.ebizautos.media/used-2017-toyota-corolla-l-11921-21241346-1-400.jpg"
},
{
  id: 8,
  name:"Nissan Altima",
  model:"2.5 SV Sedan",
  seat:5,
  year:2015,
  image:"https://cdn.ebizautos.media/used-2017-nissan-altima-25sv-12756-21225023-1-400.jpg"
},
{
  id: 9,
  name:"Mazda Mazda3",
  model:"4dr Sedan Automatic",
  seat:5,
  year:2014,
  image:"https://cdn.ebizautos.media/used-2015-mazda-mazda3-4drsedanautomaticigrandtouring-11921-21190131-1-400.jpg"
}


]
  constructor() { }

  ngOnInit(): void {
  }
  successInfo: string = "The input has saved!";
  rejectInfo: string = "The input is not valid. Please put the valid information";
 
  onSubmit(){
    if(this.car.valid){
      this.cars.push(this.car.value);
     (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
     (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
    }
    else{
      this.rejectInfo;
      (document.getElementById("reject-Info")as HTMLElement).innerHTML = this.rejectInfo;
      (document.getElementById("reject-Info")as HTMLElement).classList.add("alert-danger");
    }
   
  }

}
