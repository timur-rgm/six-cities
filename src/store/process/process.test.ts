import {process} from './process';
import {
  changeCity,
  setActiveOfferId,
  changeSorting,
} from '../../store/action';
import {ProcessStateType} from '../../types/state';
import {SortingType} from '../../const';

const state: ProcessStateType = {
  currentCity: 'Paris',
  activeOfferId: 0,
  currentSortingType: SortingType.Popular,
};

describe('Reducer: process', () => {
  it('without additional parameters should return initial state', () => {
    expect(process(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change city by change city', () => {
    expect(process(state, changeCity('Amsterdam')))
      .toEqual({...state, currentCity: 'Amsterdam'});
  });
  
  it('should change activeOfferId by change id', () => {
    expect(process(state, setActiveOfferId(1)))
      .toEqual({...state, activeOfferId: 1});
  });
  
  it('should change currentSortingType by change sorting type', () => {
    expect(process(state, changeSorting(SortingType.SortByPriceToHigh)))
      .toEqual({...state, currentSortingType: SortingType.SortByPriceToHigh});
  });
});
