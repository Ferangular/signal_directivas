import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../../core/models/menu-item.mode';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul class="list-group">
      @for(item of menuItems(); track item.title){
      <li
        class="list-group-item "
        [routerLink]="[item.route]"
        routerLinkActive="active"
      >
        {{ item.title }}
      </li>
      }
    </ul>
  `,
  styles: `
li {
  cursor: pointer;
}
  `,
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]);
}
