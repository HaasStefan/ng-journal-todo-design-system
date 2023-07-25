import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'design-system-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input({ required: true }) value!: string | null;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) id!: 'string';
  @Input({ required: true }) placeholder!: string;
  @Output() valueChange = new EventEmitter<string | null>();
}
