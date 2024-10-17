import { Routes } from '@angular/router';
import { canActivateAuth } from './features/auth';
import { canActivateConfig } from './features/config';

export const routes: Routes = [
  {
    path: '',
    canActivate: [canActivateConfig, canActivateAuth],
    children: [
      {
        path: '',
        canActivate: [],
        loadComponent: () => import('./components/homepage/homepage.component').then(x => x.HomepageComponent)
      },
      {
        path: 'change-detection',
        loadComponent: () => import('./components/change-detection/change-detection.component').then(x => x.ChangeDetectionComponent)
      },
      {
        path: 'unsubscribe',
        loadComponent: () => import('./components/unsubscribe/unsubscribe.component').then(x => x.UnsubscribeComponent)
      },
      {
        path: 'dialog',
        loadComponent: () => import('./components/modal/modal.component').then(x => x.ModalComponent)
      },
      {
        path: 'heavy',
        loadComponent: () => import('./components/heavypage/heavypage.component').then(x => x.HeavypageComponent)
      },
      {
        path: 'image',
        loadComponent: () => import('./components/image/image.component').then(x => x.ImageComponent)
      },
      {
        path: 'deferred-views',
        loadComponent: () => import('./components/deferred-views/deferred-views.component').then(x => x.DeferredViewsComponent)
      }
    ]
  }
];
