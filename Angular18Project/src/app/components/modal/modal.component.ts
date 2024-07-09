import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  handleDialogOpen() {
    // Not injected dynamically
    this.dialog.open(ConfirmDialogComponent);
  }
}
