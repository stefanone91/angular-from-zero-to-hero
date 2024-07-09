import { Routes } from '@angular/router';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { DeferredViewsComponent } from './components/deferred-views/deferred-views.component';
import { HeavypageComponent } from './components/heavypage/heavypage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ImageComponent } from './components/image/image.component';
import { ModalComponent } from './components/modal/modal.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: 'dialog', component: ModalComponent },
  { path: 'heavy', component: HeavypageComponent },
  { path: 'deferred-views', component: DeferredViewsComponent },
  { path: 'image', component: ImageComponent },
];
