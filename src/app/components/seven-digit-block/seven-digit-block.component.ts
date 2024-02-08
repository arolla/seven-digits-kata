import {
  Component,
  Input,
  SimpleChange,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocServiceService } from 'src/app/services/bloc-service.service';

@Component({
  selector: 'seven-digit-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seven-digit-block.component.html',
  styleUrls: ['./seven-digit-block.component.scss'],
})
export class SevenDigitBlockComponent {
  @Input()
  byte: number = 0;

  private blockService = inject(BlocServiceService);

  segments: boolean[] = [];

  ngOnChanges() {
    this.updateSegments();
  }

  updateSegments() {
    this.segments = this.blockService.getSegmentsForOneBloc(this.byte);
  }
}
