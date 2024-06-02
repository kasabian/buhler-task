import { EMachineStates, EMachinesType } from '../../endpoints/data.enums';

export type TMachinesTypeInfoMap = {
  [key in EMachinesType]: {
    name: string;
    fullIconClass: string;
  };
};

export type TStateInfoMap = {
  [key in EMachineStates]: {
    class: string;
  };
};

export type TSectionType = 'full' | 'short';
