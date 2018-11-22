import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { FilterStep } from 'src/app/models/filter-step';

@Component({
  selector: 'app-customer-filter-container',
  templateUrl: './customer-filter-container.component.html',
  styleUrls: ['./customer-filter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFilterContainerComponent implements OnInit {
  filter: Filter;

  constructor() { }

  ngOnInit() {
    this.filter = new Filter();
  }

  onDiscardFilters() {
    this.filter = new Filter();
  }

  onApplyFilters() {
    console.log(this.filter);
  }

  onAddFunnel() {
    this.filter.steps = [...this.filter.steps, new FilterStep()];
  }
}
