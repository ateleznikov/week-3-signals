import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
})
export class Child2Component {
  constructor(public counterService: CounterService) {}
}
