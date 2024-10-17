import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [MatButton],
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit, OnDestroy {
  interval!: NodeJS.Timeout;
  timer = signal(0);
  clicks = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('Time interval callback');
      this.timer.set(this.timer() + 1);
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
