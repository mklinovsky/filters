import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
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
  @Output() stepDeleted = new EventEmitter<FilterStep>();
  @Output() stepCopied = new EventEmitter<FilterStep>();

  title: string;
  showControls: boolean;

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
    const indexToDelete = this.step.attributes.indexOf(attribute);
    if (indexToDelete > -1) {
      this.step.attributes = this.step.attributes
        .filter((attr, index) => index !== indexToDelete);
    }
  }

  onDeleteStep() {
    this.stepDeleted.emit(this.step);
  }

  onCopyStep() {
    this.stepCopied.emit(this.step);
  }

  onMouseEnter() {
    this.showControls = true;
  }

  onMouseLeave() {
    this.showControls = false;
  }
}
