import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'design-system-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
  @Input() size: 'md' | 'lg' | 'xl' = 'md';
}
