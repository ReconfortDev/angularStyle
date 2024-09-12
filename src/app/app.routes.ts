import {Routes} from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {
    path: 'shop',
    loadComponent: () =>
      import('./pages/shop/shop.component').then(m => m.ShopComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/shop/shophome/shophome.component').then(
            m => m.ShophomeComponent
          ),
      },{
        path: 'project',
        loadComponent: () =>
          import('./pages/shop/online/online.component').then(
            m => m.OnlineComponent
          ),
      },
      {
        path: 'social',
        loadComponent: () =>
          import('./pages/shop/offline/offline.component').then(
            m => m.OfflineComponent
          ),
      },
    ],
  },
  {path: '**', redirectTo: 'shop', pathMatch: 'full'},
];
