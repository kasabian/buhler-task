import { Component, Input } from '@angular/core';
import { IMachinesData } from '../../endpoints/data.interfaces';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  @Input({ required: true }) public machinesInfoItems: IMachinesData[] = [];
}
