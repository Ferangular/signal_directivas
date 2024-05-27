import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from "../../libs/ui/side-menu/side-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  template: `
    <div class="row mt-2">
      <div class="col-2">
        <h3>Menú</h3>
        <hr />
        <side-menu />
      </div>

      <div class="col-10">
        <router-outlet />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {}
