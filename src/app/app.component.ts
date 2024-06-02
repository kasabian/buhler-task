import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { MOCK_DATA } from './shared/endpoints/data.enpoints';
import { IMachinesData } from './shared/endpoints/data.interfaces';
import { OverviewComponent } from './shared/components/overview/overview.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, OverviewComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public machinesInfo: IMachinesData[] = MOCK_DATA;
}
