import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="card m-2">
      <div class="card-body">
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy(+1)" class="btn btn-outline-success m-2">+1</button>
        <button (click)="resetCounter()" class="btn btn-outline-secondary">Reset</button>
        <button (click)="increaseBy(-1)" class="btn btn-outline-danger m-2">-1</button>.
      </div>
    </div>
  `
})
export class CounterComponent  {
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
