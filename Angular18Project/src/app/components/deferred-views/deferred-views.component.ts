import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EslintComponent } from './eslint/eslint.component';
import { HuskyComponent } from './husky/husky.component';
import { PrettierComponent } from './prettier/prettier.component';

@Component({
  selector: 'app-deferred-views',
  templateUrl: './deferred-views.component.html',
  styleUrls: ['./deferred-views.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, PrettierComponent, EslintComponent, HuskyComponent]
})
export class DeferredViewsComponent {
  formControl = new FormControl('');
}
