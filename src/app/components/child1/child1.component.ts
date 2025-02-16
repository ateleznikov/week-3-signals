import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
})
export class Child1Component {
  constructor(public counterService: CounterService) {}
}
