import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard-routing.module').then(
            (m) => m.DashboardRoutingModule
          ),
      },
];
