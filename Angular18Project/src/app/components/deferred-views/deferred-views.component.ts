import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deferred-views',
  templateUrl: './deferred-views.component.html',
  styleUrls: ['./deferred-views.component.scss'],
})
export class DeferredViewsComponent implements OnInit {
  formControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
