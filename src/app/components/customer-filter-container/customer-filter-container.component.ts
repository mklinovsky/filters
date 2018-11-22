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

  onStepDeleted(step: FilterStep) {
    const indexToDelete = this.filter.steps.indexOf(step);
    if (indexToDelete > -1) {
      this.filter.steps = this.filter.steps
        .filter((item, index) => index !== indexToDelete);
    }
  }

  onStepCopied(step: FilterStep) {
    this.filter.steps = [...this.filter.steps, this.copyStep(step)];
  }

  private copyStep(step: FilterStep): FilterStep {
    const newStep = new FilterStep();
    newStep.eventName = step.eventName;
    newStep.attributes = step.attributes;

    return newStep;
  }
}
