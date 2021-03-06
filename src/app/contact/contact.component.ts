import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

info= new FormGroup({
  name: new FormControl('',[Validators.required, Validators.minLength(4)]),
  age: new FormControl('',Validators.required),
  gender: new FormControl('',Validators.required),
  status: new FormControl('',Validators.required)
});


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
      if(this.info.valid){
      
      }
      else{
        console.log("Not Validate");
      }
  }

}
