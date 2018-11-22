import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor() { }

  getEvents() {
    return [
      'python_script_event',
      'python_script_event1',
      'python_script_event2',
      'python_script_event3',
      'C1',
      'C2'
    ];
  }

  getEventAttributes(event: string) {
    return [
      'price',
      'timestamp',
      'index',
      'count'
    ];
  }

  getNumberOperators() {
    return [
      { value: 'equal', text: 'equal to' },
      { value: 'between', text: 'in between' },
      { value: 'less', text: 'less than' },
      { value: 'greater', text: 'greater than' }
    ];
  }

  getStringOperators() {
    return [
      { value: 'equal', text: 'equals'},
      { value: 'not-equal', text: 'does not equal'},
      { value: 'contain', text: 'contains'},
      { value: 'not-contain', text: 'does not contain'}
    ];
  }
}
