import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.createForm();
  }

  selection(type, $event) {
    console.log('here', $event);
    let assign = {};
    assign[type] = $event.code;
    this.searchForm.patchValue(assign);
  }

  createForm() {
    this.searchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
