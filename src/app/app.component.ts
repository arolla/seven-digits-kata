import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SevenDigitBlockComponent } from './components/seven-digit-block/seven-digit-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SevenDigitBlockComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kata-seven-segments';
}
