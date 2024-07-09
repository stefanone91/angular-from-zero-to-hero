import { Component, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-uploader-dnd',
  templateUrl: './uploader-dnd.component.html',
  styleUrls: ['./uploader-dnd.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UploaderDndComponent),
    },
  ],
})
export class UploaderDndComponent implements ControlValueAccessor {
  @Input('value') _value: File = null;
  @Input() accept?: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  handleFileChange(event: Event) {
    this.value = (event.target as HTMLInputElement).files?.[0] as File;
  }
}
