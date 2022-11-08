import {SortingType} from '../../const';
import {ActionType, Actions} from '../../types/action';
import {ProcessStateType} from '../../types/state';

const initialState: ProcessStateType = {
  currentCity: 'Paris',
  activeOfferId: 0,
  currentSortingType: SortingType.Popular,
}

const process = (state: ProcessStateType = initialState, action: Actions): ProcessStateType => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.SetActiveOfferId:
      return {...state, activeOfferId: action.payload};
    case ActionType.ChangeSorting:
      return {...state, currentSortingType: action.payload};
    default:
      return state;
  }
}


export {process};