import browserHistory from '../../browser-history';
import {Middleware} from '@reduxjs/toolkit';
import {RootStateType} from '../root-reducer';
import {ActionType} from '../../types/action';

export const redirect: Middleware<unknown, RootStateType> = (_store) => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    browserHistory.push(action.payload);
  }

  return next(action);
}