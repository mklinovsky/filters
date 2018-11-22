import { EventAttribute } from './event-attribute';

export class FilterStep {
  eventName: string;
  attributes: EventAttribute[];

  constructor() {
    this.attributes = [];
  }
}
