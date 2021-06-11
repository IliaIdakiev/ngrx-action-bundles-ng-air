import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { userDetailActions, userListActions } from './actions';

export interface IUserListState {
  userList: any[] | null;
}

const initialUserListState: IUserListState = {
  userList: null
};

export const userListReducer = createReducer(
  initialUserListState,
  on(userListActions.loadUsersSuccess, (state, { users }) => ({ ...state, userList: users })),
  on(userListActions.loadUsersClear, () => ({ ...initialUserListState }))
);


export interface IUserDetailState {
  user: any | null;
}

const initialDetailState: IUserDetailState = {
  user: null
};

export const userDetailReducer = createReducer(
  initialDetailState,
  on(userDetailActions.loadUserSuccess, (state, { user }) => ({ ...state, user })),
  on(userDetailActions.loadUserClear, () => ({ ...initialDetailState }))
);

export const userModuleStoreName = 'user';

export interface IUserState {
  readonly userDetail: IUserDetailState,
  readonly userList: IUserListState,
}

export const userReducers: ActionReducerMap<IUserState> = {
  userDetail: userDetailReducer,
  userList: userListReducer,
};
