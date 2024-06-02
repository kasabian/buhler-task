import { Component, Input } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { IMachinesData } from '../../endpoints/data.interfaces';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  @Input({ required: true }) public machinesInfoItems: IMachinesData[] = [];
}
