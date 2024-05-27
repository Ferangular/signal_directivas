import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signals',
    loadChildren: () =>
      import('./pages/signals/signals.index').then((c) => c.SIGNALS_ROUTES),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },

  { path: '**', redirectTo: 'signals' },
];
