import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  template: `
    <h1>Counter: {{ counter() }}</h1>
    <hr />
    <h2>Square Counter {{ squareCounter() }}</h2>
    <hr />

    <button (click)="increaseBy(+1)" class="btn btn-primary">+ 1</button>
    &nbsp;
    <button (click)="increaseBy(-1)" class="btn btn-primary">- 1</button>
    &nbsp;
    <button (click)="counter.set(0)" class="btn btn-primary">Reset</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
