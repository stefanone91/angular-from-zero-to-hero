import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { PdfService } from 'src/app/features/pdf';
import { UploaderDndComponent } from '../uploader-dnd/uploader-dnd.component';

@Component({
  selector: 'app-heavypage',
  standalone: true,
  imports: [ReactiveFormsModule, MatButton, MatLabel, UploaderDndComponent],
  templateUrl: './heavypage.component.html',
  styleUrls: ['./heavypage.component.scss']
})
export class HeavypageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly pdfService = inject(PdfService);

  form = this.fb.nonNullable.group({
    image: this.fb.nonNullable.control<Blob | null>(null, [Validators.required])
  });

  async handleSubmit() {
    if (this.form.invalid) {
      return;
    }
    const image = this.form.value.image!;
    const blob = await this.pdfService.convertImageToPDF(image);
    await this.pdfService.viewFile(blob, 'application/pdf', 'image_from_pdf.pdf');
  }
}
