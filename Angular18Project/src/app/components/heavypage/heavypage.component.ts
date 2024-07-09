import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-heavypage',
  templateUrl: './heavypage.component.html',
  styleUrls: ['./heavypage.component.scss'],
})
export class HeavypageComponent implements OnInit {
  form = new FormGroup({
    image: new FormControl(null, [Validators.required]),
  });

  constructor(private readonly pdfService: PdfService) {}

  ngOnInit(): void {}

  async handleSubmit() {
    if (this.form.invalid) {
      return;
    }
    const image = this.form.get('image').value;
    const blob = await this.pdfService.convertImageToPDF(image);
    await this.pdfService.viewFile(
      blob,
      'application/pdf',
      'image_from_pdf.pdf'
    );
  }
}
