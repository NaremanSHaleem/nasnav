import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../Services/newService.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [NewServiceService]
})
export class MyComponentComponent implements OnInit {

  constructor(private newService: NewServiceService) { }

  ngOnInit() {
  }
  onClick() {
this.newService.onClick().subscribe(
  data => console.log(data),
  err => console.log(err)
);
  }
}
