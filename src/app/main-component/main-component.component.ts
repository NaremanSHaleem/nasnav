import { Component, OnInit } from '@angular/core';
import { MyService } from '../Services/my-service.service';
import { MyInterface } from '../models/my-interface';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(public myService: MyService) {}
 product = {
      'id': 1260,
      'category_id': 9,
      'price': '0.0'
};
  ngOnInit() {
  }


   onSubmit() {
    this.myService.addrecord(this.product).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
