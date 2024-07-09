import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeavypageComponent } from './components/heavypage/heavypage.component';
import { ImageComponent } from './components/image/image.component';
import { DeferredViewsComponent } from './components/deferred-views/deferred-views.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: 'dialog', component: ModalComponent },
  { path: 'heavy', component: HeavypageComponent },
  { path: 'deferred-views', component: DeferredViewsComponent },
  { path: 'image', component: ImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
