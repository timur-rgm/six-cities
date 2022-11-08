import {combineReducers} from 'redux';
import {data} from './data/data';
import {process} from './process/process';
import {user} from './user/user';

export enum NameSpace {
  data = 'DATA',
  process = 'PROCESS',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: data,
  [NameSpace.process]: process,
  [NameSpace.user]: user,
})

export type RootStateType = ReturnType<typeof rootReducer>;