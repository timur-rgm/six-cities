import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  setActiveOfferId,
  changeSorting
} from '../../store/action';
import {SortingType} from '../../const';
import {ProcessStateType} from '../../types/state';

const initialState: ProcessStateType = {
  currentCity: 'Paris',
  activeOfferId: 0,
  currentSortingType: SortingType.Popular,
}

const process = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSortingType = action.payload;
    })
})

export {process};