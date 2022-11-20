import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }

  cnt=0;
  total=0;
  final:any;
  ctrlrating = new FormControl(0);

  GetStars(){
    console.log(this.ctrlrating.value);
    this.cnt++;
    this.total +=this.ctrlrating?.value || 0;
    this.final = (this.total/this.cnt).toFixed(2);
  }

  title = 'starrating';
}
