import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    console.log('asd');
  }
}
