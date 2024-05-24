import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'signal_directivas';
  parent(){
    console.log('parent');
  }

  child(){
    console.log('child')
  }

  protected name = signal('Angular');

  handleClick() {
    this.name.set('Zoneless Angular');
  }
}
