import {NameSpace, RootStateType} from '../root-reducer';
import {AuthorizationStatus} from '../../const';
import {UserDataType} from '../../types/user-data';

export const getAuthorizationStatus = (state: RootStateType): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getUserData = (state: RootStateType): UserDataType => state[NameSpace.user].user;