import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeavypageComponent } from './components/heavypage/heavypage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ImageComponent } from './components/image/image.component';
import { EslintComponent } from './components/deferred-views/eslint/eslint.component';
import { HuskyComponent } from './components/deferred-views/husky/husky.component';
import { DeferredViewsComponent } from './components/deferred-views/deferred-views.component';
import { PrettierComponent } from './components/deferred-views/prettier/prettier.component';
import { ConfirmDialogComponent } from './components/modal/confirm-dialog/confirm-dialog.component';
import { ModalComponent } from './components/modal/modal.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';
import { UploaderDndComponent } from './components/uploader-dnd/uploader-dnd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeavypageComponent,
    ConfirmDialogComponent,
    HeaderComponent,
    FooterComponent,
    ImageComponent,
    DeferredViewsComponent,
    UploaderDndComponent,
    ChangeDetectionComponent,
    UnsubscribeComponent,
    ModalComponent,
    PrettierComponent,
    EslintComponent,
    HuskyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
