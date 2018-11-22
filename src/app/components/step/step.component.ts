import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FilterStep } from 'src/app/models/filter-step';
import { EventAttribute } from 'src/app/models/event-attribute';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {
  @Input() step: FilterStep;
  @Input() order: number;
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = this.step.eventName;
  }

  onEventSelected(event) {
    this.title = event;
    this.step.eventName = event;
  }

  onAddAttribute() {
    this.step.attributes = [...this.step.attributes, new EventAttribute()];
  }

  onDeleteAttribute(attribute: EventAttribute) {
    this.step.attributes = this.step.attributes.filter(a => a.name !== attribute.name);
  }
}
