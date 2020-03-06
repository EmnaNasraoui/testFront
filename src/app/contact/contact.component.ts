import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: any;
  number: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('profile.name');
    this.number = this.route.snapshot.paramMap.get('profile.number');


    console.log(  this.route.snapshot.paramMap.get('profile.name'));
  }


}
