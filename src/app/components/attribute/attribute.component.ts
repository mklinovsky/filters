import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { EventDataService } from 'src/app/services/event-data.service';
import { EventAttribute } from 'src/app/models/event-attribute';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributeComponent implements OnInit {
  @Input() eventName: string;
  @Input() attribute: EventAttribute;
  @Output() attributeDeleted = new EventEmitter<EventAttribute>();

  attributeNames: string[];
  numberOperators: any[];
  stringOperators: any[];
  showRangeValue: boolean;

  constructor(
    private eventData: EventDataService
  ) { }

  ngOnInit() {
    this.attributeNames = this.eventData.getEventAttributes(this.eventName);
    this.numberOperators = this.eventData.getNumberOperators();
    this.stringOperators = this.eventData.getStringOperators();
    this.setShowRangeValue();
  }

  onSelectionChange(e) {
    this.attribute.name = e.value;
  }

  onOperatorChange(e) {
    this.attribute.operator = e.value;
    this.setShowRangeValue();
  }

  onValueChange(e) {
    this.attribute.value = e.target.value;
  }

  onRangeValueChange(e) {
    this.attribute.rangeValue = e.target.value;
  }

  onDeleteAttribute() {
    this.attributeDeleted.emit(this.attribute);
  }

  private setShowRangeValue() {
    this.showRangeValue = this.attribute.operator === 'between';
  }
}
