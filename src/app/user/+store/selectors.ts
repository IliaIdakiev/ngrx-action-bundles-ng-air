import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserListState, IUserDetailState, IUserState, userModuleStoreName } from './reducers';

export const getUserList = (state: IUserListState) => state.userList;
export const getUserDetail = (state: IUserDetailState) => state.user;

export const getUserState = createFeatureSelector<IUserState>(userModuleStoreName);

export const getUserListState = createSelector(getUserState, state => state.userList);
export const getUserDetailState = createSelector(getUserState, state => state.userDetail);

export const userDetailSelectors = {
  userDetail: createSelector(getUserDetailState, getUserDetail)
};

export const userListSelectors = {
  userList: createSelector(getUserListState, getUserList)
};
