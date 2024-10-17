/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-uploader-dnd',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './uploader-dnd.component.html',
  styleUrls: ['./uploader-dnd.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UploaderDndComponent)
    }
  ]
})
export class UploaderDndComponent implements ControlValueAccessor {
  @Input('value') _value: File | null = null;
  @Input() accept?: string;

  onChange = (val: File | null) => {};
  onTouched = () => {};

  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: (val: File | null) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: File | null) {
    if (value) {
      this.value = value;
    }
  }

  handleFileChange(event: Event) {
    this.value = (event.target as HTMLInputElement).files?.[0] as File;
  }
}
