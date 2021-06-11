import { createAction, props } from "@ngrx/store";

const namespace = '[USER MODULE]';

const loadUsers = createAction(`${namespace} Load Users`);
const loadUsersSuccess = createAction(`${namespace} Load Users Success`, props<{ users: any[] }>());
const loadUsersFailure = createAction(`${namespace} Load Users Failure`, props<{ error: any }>());
const loadUsersCancel = createAction(`${namespace} Load Users Cancel`);
const loadUsersClear = createAction(`${namespace} Load Users Clear`);

export const userListActions = {
  loadUsers,
  loadUsersCancel,
  loadUsersSuccess,
  loadUsersFailure,
  loadUsersClear
};

const loadUser = createAction(`${namespace} Load User`, props<{ id: number }>());
const loadUserSuccess = createAction(`${namespace} Load User Success`, props<{ user: any }>());
const loadUserFailure = createAction(`${namespace} Load User Failure`, props<{ error: any }>());
const loadUserCancel = createAction(`${namespace} Load User Cancel`);
const loadUserClear = createAction(`${namespace} Load User Clear`);

export const userDetailActions = {
  loadUser,
  loadUserCancel,
  loadUserSuccess,
  loadUserFailure,
  loadUserClear
};
