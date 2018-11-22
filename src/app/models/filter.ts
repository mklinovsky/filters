import { FilterStep } from './filter-step';

export class Filter {
  steps: FilterStep[];

  constructor() {
    this.steps = [ new FilterStep() ];
  }
}
