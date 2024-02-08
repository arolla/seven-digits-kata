import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SevenDigitBlockComponent } from './components/seven-digit-block/seven-digit-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SevenDigitBlockComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kata-seven-segments';
  bytes: number[] = [];

  ngOnInit() {
    this.bytes = new Array(28).fill(79);
  }
}
