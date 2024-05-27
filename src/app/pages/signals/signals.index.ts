import { CounterPageComponent } from "./counter-page/counter-page.component";
import { MainComponent } from "./main.component";
import { PropertiesPageComponent } from "./properties-page/properties-page.component";
import { UserInfoPageComponent } from "./user-info-page/user-info-page.component";

export const SIGNALS_ROUTES = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'counter', component: CounterPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'counter' },
    ],
  },
];
