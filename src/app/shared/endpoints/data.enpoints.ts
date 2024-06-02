import { IMachinesData } from './data.interfaces';
import { EMachineStates, EMachinesType } from './data.enums';

export const MOCK_DATA: IMachinesData[] = [
  {
    type: EMachinesType.Scale,
    state: EMachineStates.Running,
  },
  {
    type: EMachinesType.BagAttach,
    state: EMachineStates.Alarm,
  },
  {
    type: EMachinesType.Packer,
    state: EMachineStates.Running,
  },
  {
    type: EMachinesType.BagCloser,
    state: EMachineStates.Warning,
  },
];
