import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  async convertImageToPDF(image: Blob) {
    const pdfDoc = await PDFDocument.create();

    const pngImageBytes =
      image instanceof ArrayBuffer ? image : await image.arrayBuffer();
    const pngImage = await pdfDoc.embedPng(pngImageBytes);
    const page = pdfDoc.addPage();

    const test = calculateAspectRatioFit(
      pngImage.width,
      pngImage.height,
      page.getWidth(),
      page.getHeight()
    );
    page.drawImage(pngImage, {
      x: page.getWidth() / 2 - test.width / 2,
      y: page.getHeight() / 2 - test.height / 2,
      width: test.width,
      height: test.height,
    });

    const pdfBytes = await pdfDoc.save();
    return new Blob([pdfBytes], { type: 'application/pdf' });
  }

  async viewFile(blob: Blob, fileType: string, fileName: string) {
    const file = new File([blob], fileName, { type: fileType });
    const url = URL.createObjectURL(file);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.title = fileName;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function calculateAspectRatioFit(
  srcWidth: number,
  srcHeight: number,
  maxWidth: number,
  maxHeight: number
) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: srcWidth * ratio, height: srcHeight * ratio };
}
