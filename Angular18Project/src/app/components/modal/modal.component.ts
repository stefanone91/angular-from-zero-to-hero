import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButton],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  private readonly dialog = inject(MatDialog);

  async handleDialogOpen() {
    const { ConfirmDialogComponent } = await import('./confirm-dialog/confirm-dialog.component');
    this.dialog.open(ConfirmDialogComponent);
  }
}
