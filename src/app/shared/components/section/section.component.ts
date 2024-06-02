import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IMachinesData } from '../../endpoints/data.interfaces';
import { EMachineStates, EMachinesType } from '../../endpoints/data.enums';
import {
  TMachinesTypeInfoMap,
  TSectionType,
  TStateInfoMap,
} from './section.interfaces';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {
  @Input({ required: true }) public machinesInfo!: IMachinesData;
  @Input({ required: false }) public sectionType: TSectionType = 'short';

  public typeInfoMap: TMachinesTypeInfoMap = {
    [EMachinesType.Scale]: {
      name: 'Scale',
      fullIconClass: 'md-system_update_alt-icon',
    },
    [EMachinesType.BagAttach]: {
      name: 'Bag Attach',
      fullIconClass: 'md-wysiwyg-icon',
    },
    [EMachinesType.Packer]: {
      name: 'Packer',
      fullIconClass: 'md-settings_system_daydream-icon',
    },
    [EMachinesType.BagCloser]: {
      name: 'Bag Closer',
      fullIconClass: 'md-grid_view-icon',
    },
  };

  public stateInfoMap: TStateInfoMap = {
    [EMachineStates.Alarm]: {
      class: 'alarm-section',
    },
    [EMachineStates.Running]: {
      class: 'running-section',
    },
    [EMachineStates.Warning]: {
      class: 'warning-section',
    },
  };

  @HostBinding('class') class: string = '';

  ngOnInit() {
    this.class = this.stateInfoMap[this.machinesInfo.state].class;
  }
}
