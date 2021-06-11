import { createAsyncBundleWithClear } from 'ngrx-action-bundles';

const namespace = '[USER MODULE]';

export const loadUserListBundle = createAsyncBundleWithClear('loadUsers', namespace)<void, { users: any[] }, { error: any }>();

export const userListBundles = [
  loadUserListBundle
];
