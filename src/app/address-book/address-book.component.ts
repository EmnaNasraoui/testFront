import { FiltreWithFLPipe } from './../filtre-with-fl.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  title = 'projetTest';
  searchText;

  profiles = [
    { name: 'Mr. Nice', number: '12345678' },
    { name: 'Narco', number: '87456321' },
    { name: 'Bombasto', number: '2589630' },
    { name: 'Celeritas', number: '123652' },
    { name: 'Magneta', number: '6359462' },
    { name: 'RubberMan', number: '12345678' },
    { name: 'Dynama', number: '6652555' },
    { name: 'Dr IQ', number: '6556323' },
    { name: 'Magma', number: '87484455' },
    { name: 'Tornado', number: '5989856' }
  ];
  searchJson = { name: [] };
  constructor() { }

  ngOnInit() {
  }
  addToFilter(filterValue) {
    // this.filteredProducts = this.products;
    let arrayCol: any[] = <Array<any>>this.searchJson['name'];
    if (arrayCol.includes(filterValue)) {
      arrayCol = arrayCol.filter(elem => elem !== filterValue);
    } else {
      arrayCol.push(filterValue);
    }
    console.log(this.searchJson);

    this.searchJson['name'] = arrayCol;
    const p = new FiltreWithFLPipe();
    this.profiles = p.transform(this.profiles, this.searchJson);
  }
}
