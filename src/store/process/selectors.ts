import {NameSpace, RootStateType} from '../root-reducer';
import {SortingType} from '../../const';

export const getCurrentCity = (state: RootStateType): string => state[NameSpace.process].currentCity; 
export const getActiveOfferId = (state: RootStateType): number => state[NameSpace.process].activeOfferId; 
export const getCurrentSortingType = (state: RootStateType): SortingType => state[NameSpace.process].currentSortingType; 
