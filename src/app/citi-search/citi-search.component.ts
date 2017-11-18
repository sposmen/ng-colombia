import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

import {CitiesService} from '../cities.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-citi-search',
  templateUrl: './citi-search.component.html',
  styleUrls: ['./citi-search.component.css'],
  providers: [CitiesService],
  encapsulation: ViewEncapsulation.Emulated,
  inputs: ['label']
})

export class CitiSearchComponent implements OnInit {
  @ViewChild('search_box') search_box: ElementRef;
  @Output() onSelect = new EventEmitter();
  cities = [  ];
  startAt = new Subject();
  endAt = new Subject();
  lastKeyPress = 0;

  constructor(private citiesSvc: CitiesService) {
  }

  ngOnInit() {
    this.citiesSvc.getCities(this.startAt, this.endAt)
      .subscribe(cities => {
        this.cities = cities;
      });
  }

  search($event) {
    const q = $event.target.value.toUpperCase();

    if ($event.timeStamp - this.lastKeyPress > 200) {
      this.startAt.next(q);
      this.endAt.next(q + '\uf8ff');
    }

    this.lastKeyPress = $event.timeStamp;

  }

  setCity(city) {
    this.onSelect.emit(city);
    this.search_box.nativeElement.value = city.name;
    this.cities = null;
  }
}
