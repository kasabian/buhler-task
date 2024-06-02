import { EMachineStates, EMachinesType } from './data.enums';

export interface IMachinesData {
  type: EMachinesType;
  state: EMachineStates;
}
