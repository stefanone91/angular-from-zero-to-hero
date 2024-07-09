import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit, OnDestroy {
  interval;
  timer: number = 0;
  clicks: number = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('Time interval callback');
      this.timer++;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
